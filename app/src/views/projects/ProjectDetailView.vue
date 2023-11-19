<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, reactive, ref, useAttrs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePreferredDark } from "@vueuse/core";

import { useEmitter } from "@/hooks/useEmitter";
import { useUiStore } from "@/stores/uiStore";
import { useProjectStore } from "@/stores/projectStore";
import { setTitle } from "@/hooks/usePageToolkits";
import { loadProjectMetadataAsync, loadProjectProfileAsync, loadProjectsAsync } from "@/hooks/useProjectToolkits";
import type { CatalogueMap, ProjectCardModel } from "@/apis/QueryProjectListApi";
import type { ProjectModuleDescriptor } from "@/apis/QueryProjectProfileApi";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import Anchor from "@/components/basic/AnchorElement.vue";
import LeftRightLayout from "@/components/basic/LeftRightLayout.vue";
import { Code, Github, Home } from "@icon-park/vue-next";
import ProjectContributors from "@/components/projects/ProjectContributors.vue";

setTitle("Member Project Detail");

const uiStore = useUiStore();
const projectStore = useProjectStore();
const emitter = useEmitter();
const attrs = useAttrs();
const route = useRoute();
const router = useRouter();

const akaId = attrs.akaId as string;
const projects = reactive<ProjectCardModel[]>([]);
const catalogues = reactive<CatalogueMap>({});

const updateProjects = (models: ProjectCardModel[]) => {
  projects.length = 0;
  for (const model of models) {
    projects.push(model);
  }
};

const updateCatalogues = (catalog: CatalogueMap) => {
  for (const key in catalog) {
    catalogues[key] = catalog[key];
  }
};

const currentPrefersDarkMode = usePreferredDark();
const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
    ? "#f8f8f8"
    : "#000000";
});

const useProject = computed(() => {
  return projects.find(x => x.id === akaId)!;
});

const useProjectLogo = computed(() => {
  let logo = useProject?.value?.logo;
  if (!logo || logo.length === 0)
    logo = `/images/projects/${akaId}.png`;
  return logo;
});

const displayGitHubSource = computed(() => {
  const g = useProject?.value?.github;
  return !!g && g.length > 0;
});

const displayGiteeSource = computed(() => {
  const g = useProject?.value?.gitee;
  return !!g && g.length > 0;
});

const displayWebSite = computed(() => {
  const w = useProject?.value?.website;
  return !!w && w.length > 0;
});

const displayLanguage = computed(() => {
  const l = useProject?.value?.language;
  return !!l && l.length > 0;
});

const useLanguageArray = computed(() => {
  const l = useProject?.value?.language;
  if (!!l && l.length > 0) {
    return l;
  } else {
    return [];
  }
});

const currentProjectPaper = ref("");
const displayProjectPaper = (paper: string) => {

  const previousPaper = currentProjectPaper.value;
  currentProjectPaper.value = paper;

  if (paper === "") {
    router.push({ path: `/projects/${useProject.value.id}` });
    return;
  }

  const targetPaper = projectStore.currentProjectMetadata.modules.find(x => x.name === paper);

  if (!targetPaper) {
    router.push({ path: `/projects/${useProject.value.id}/paper-not-found` });
    return;
  }

  if (targetPaper["in-build"]) {
    router.push({ path: `/projects/${useProject.value.id}/${paper}` });
    return;
  }

  //這裡要判斷， 非 built-in 按鈕，如果 target 為非空，則打開新頁面
  const targetProfile = projectStore.currentProjectProfile.modules[paper];

  if (!targetProfile) {
    router.push({ path: `/projects/${useProject.value.id}/${paper}` });
    return;
  }

  if (targetProfile.url) {
    currentProjectPaper.value = previousPaper;
    window.open(targetProfile.url, "_blank");
    return;
  }

  router.push({ path: `/projects/${useProject.value.id}/${paper}` });
};

const toPaperNameAka = (paper: string) => {
  if (paper === "general")
    return "";
  return paper;
};

const usePapers = computed(() => {
  const modules = projectStore.currentProjectMetadata?.modules as ProjectModuleDescriptor[];
  if (!modules)
    return [];
  return modules.filter(x => x.float !== "right").sort((a, b) => a.sort - b.sort);
});

const useRightPapers = computed(() => {
  const modules = projectStore.currentProjectMetadata?.modules as ProjectModuleDescriptor[];
  if (!modules)
    return [];
  return modules.filter(x => x.float === "right").sort((a, b) => b.sort - a.sort);
});

const getPaperAliasName = (name: string): string => {
  const modules = projectStore.currentProjectProfile?.modules;
  if (!modules)
    return name;
  const alias = modules[name];
  if (!alias)
    return name;
  if (typeof alias === "string")
    return alias;
  return alias["title"];
};

const hasModule = (paperName: string): boolean => {
  return !!projectStore.currentProjectMetadata.modules.find(x => x.name === paperName);
};

onMounted(async () => {

  loadProjectsAsync(uiStore.locale, updateProjects, updateCatalogues).then(() => {

    if (!(useProject.value) ||
      !projects.some(p => p.id === akaId) ||
      projects.some(p => p.id === akaId && p.status === "other")) {
      router.push({ name: "project-not-found" });
    }

    setTitle(`NCC ${useProject.value!.name}`, "direct");
  }).then(() => {

    loadProjectMetadataAsync(akaId, projectStore.setCurrentProjectMetadata);

    loadProjectProfileAsync(uiStore.locale, akaId, projectStore.setCurrentProjectProfile);

  });

  emitter.on("toChangeLocale", async (e) => {
    const event = e as { locale: string };
    await loadProjectsAsync(event.locale, updateProjects, updateCatalogues);
    await loadProjectProfileAsync(event.locale, akaId, projectStore.setCurrentProjectProfile);
  });

  emitter.on("toChangeProjectPaper", (e) => {
    const event = e as { paper: string, broadcast?: number };

    nextTick(() => {
      if (hasModule(event.paper)) {
        currentProjectPaper.value = event.paper;
      } else if (!event.broadcast) {
        currentProjectPaper.value = "#404#";
        router.push({ name: "project-not-found" });
      } else {
        currentProjectPaper.value = "#404#";
        emitter.emit(`toBind404Page${event.broadcast}`, { akaId: akaId });
      }
    });

  });

});

onUnmounted(() => {
  emitter.off("toChangeLocale");
  emitter.off("toChangeProjectPaper");
});
</script>

<template>
  <body-block>

    <!-- Project Title -->
    <title-block :is-font-black="false">
      <left-right-layout>

        <!-- LEFT: Title -->
        <template #left>
          <span class="inline-block align-middle">
            <img :src="useProjectLogo" width="40" :alt="useProject?.name" :title="useProject?.name" />
            </span>
          <span class="inline-block align-middle cursor-default px-3">
              {{ useProject?.name }}
          </span>
        </template>

        <!-- RIGHT: Additional Parts -->
        <template #right>

          <left-right-layout>

            <!-- LEFT: Contributors -->
            <template #left>
              <project-contributors :github="useProject?.github" />
            </template>

            <!--RIGHT: Go Back -->
            <template #right>

              <div class="go-back">
                <anchor href="/projects" :title="$t('project-all-full')" mode="classic">
                  {{ $t("project-all-full") }}
                </anchor>
              </div>

            </template>

          </left-right-layout>

        </template>
      </left-right-layout>
    </title-block>

    <!-- Project Cards -->
    <div class="card">

      <left-right-layout>

        <template #left>

          <!-- Project Leader Card -->
          <anchor :href="useProject?.leader?.url" :title="useProject?.leader?.name" target="_blank" mode="classic">
            {{ useProject?.leader?.name }}
          </anchor>

          <!-- Project Status Card -->
          <span v-if="useProject?.status==='archived'" class="tip archived">
        <anchor href="/archived-projects" :title="$t('project-archived')" mode="classic">
           {{ $t("project-archived") }}
        </anchor>
      </span>
          <span v-else-if="useProject?.status==='top-level'" class="tip toplevel">
        <anchor href="/top-level-projects" :title="$t('project-top-level')" mode="classic">
           {{ $t("project-top-level") }}
        </anchor>
      </span>
          <span v-else-if="useProject?.status==='sandbox'" class="tip sandbox">{{ $t("project-sandbox") }}</span>
          <span v-else-if="useProject?.status==='incubation'" class="tip incubation">{{ $t("project-incubation") }}</span>
          <span v-else-if="useProject?.status==='labs'" class="tip labs">{{ $t("project-laboratory") }}</span>
          <span v-else-if="useProject?.status==='translation'" class="tip translation">{{ $t("project-translation") }}</span>

          <!-- Project External Flag Card -->
          <span v-if="useProject?.external" class="tip external">{{ $t("project-external") }}</span>

          <!-- Project Catalogue Card -->
          <span class="tip catalogue">{{ catalogues[useProject?.catalogue] }}</span>

          <!-- Project GitHub Card -->
          <span v-if="displayGitHubSource" class="tip2 align-middle">
        <anchor :href="useProject?.github" title="GitHub" target="_blank" mode="classic">
             <github class="inline-block align-middle" theme="filled" size="14" :fill="useIconColor" />
              <span class="inline-block align-middle ml-1 font-medium">GitHub</span>
        </anchor>
      </span>

          <!-- Project Gitee Card -->
          <span v-if="displayGiteeSource" class="tip2 align-middle">
        <anchor :href="useProject?.gitee" title="Gitee" target="_blank" mode="classic">
              <svg class="inline-block align-middle icon"
                   t="1698644520030" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                   p-id="4566" data-spm-anchor-id="a313x.search_index.0.i5.73f13a81QDVP27"
                   :width="14" :height="14">
                <path
                  d="M625.727964 666.847792q9.151997 9.151997 0 17.727994-35.423989 35.423989-113.727964 35.423989t-113.727964-35.423989q-9.151997-8.575997 0-17.727994 3.423999-3.423999 8.575997-3.423999t8.575997 3.423999q27.423991 27.999991 96.57597 27.999991 68.575979 0 96.57597-27.999991 3.423999-3.423999 8.575997-3.423999t8.575997 3.423999zM450.272019 563.423824q0 21.151993-14.847995 35.999989t-35.999989 14.847995-36.287989-14.847995-15.135995-35.999989q0-21.727993 15.135995-36.575989t36.287989-14.847995 35.999989 15.135995 14.847995 36.287989zM675.999949 563.423824q0 21.151993-15.135995 35.999989t-36.287989 14.847995-35.999989-14.847995-14.847995-35.999989 14.847995-36.287989 35.999989-15.135995 36.287989 14.847995 15.135995 36.575989zM819.423904 494.847845q0-27.999991-19.999994-47.999985t-48.575985-19.999994-49.151985 20.575994q-74.271977-51.423984-177.727944-54.847983l35.999989-161.727949 114.271964 25.727992q0 21.151993 14.847995 35.999989t35.999989 14.847995 36.287989-15.135995 15.135995-36.287989-15.135995-36.287989-36.287989-15.135995q-30.84799 0-45.727986 28.575991l-126.271961-27.999991q-10.847997-2.847999-14.271996 9.151997l-39.423988 178.271944q-102.847968 3.999999-176.575945 55.423983-19.999994-21.151993-49.727984-21.151993-28.575991 0-48.575985 19.999994t-19.999994 47.999985q0 19.999994 10.559997 36.575989t28.287991 25.151992q-3.423999 15.423995-3.423999 31.99999 0 81.151975 79.999975 138.847957t192.57594 57.727982q113.151965 0 193.15194-57.727982t79.999975-138.847957q0-18.271994-3.999999-32.57599 17.151995-8.575997 27.423991-24.863992t10.271997-36.287989zM1023.99984 511.99984q0 103.999968-40.575987 198.847938t-109.151966 163.423949-163.423949 109.151966-198.847938 40.575987-198.847938-40.575987-163.423949-109.151966-109.151966-163.423949-40.575987-198.847938 40.575987-198.847938 109.151966-163.423949 163.423949-109.151966 198.847938-40.575987 198.847938 40.575987 163.423949 109.151966 109.151966 163.423949 40.575987 198.847938z"
                  p-id="4567" data-spm-anchor-id="a313x.search_index.0.i4.73f13a81QDVP27" class="selected" :fill="useIconColor"></path>
              </svg>
              <span class="inline-block align-middle ml-1 font-medium">Gitee</span>
        </anchor>
      </span>

          <!-- Project WebSite Card -->
          <span v-if="displayWebSite" class="tip2 align-middle">
        <anchor :href="useProject?.website" title="WebSite" target="_blank" mode="classic">
             <home class="inline-block align-middle" theme="filled" size="14" :fill="useIconColor" />
              <span class="inline-block align-middle ml-1 font-medium">WebSite</span>
        </anchor>
      </span>

        </template>

        <template #right>

          <!-- Project Language Card -->
          <span v-if="displayLanguage" class="tip2 language-card">
            <Code theme="outline" size="16" :fill="useIconColor" class="inline-block align-middle" />
            <span v-for="language in useLanguageArray" :key="language" class="inline-block align-middle">
    <!--          <img :src="`/images/languages/${language}.png`" width="14" :alt="language" :title="language" />-->
              {{ language }}
              </span>
          </span>

        </template>

      </left-right-layout>

    </div>

    <!-- Project Description -->
    <div class="px-5">
      {{ useProject?.description }}
    </div>

    <!-- Project PageModules Tab -->
    <div class="sub-catalog z-20">

      <left-right-layout>

        <template #left>

          <button v-for="paper in usePapers"
                  :key="paper.name"
                  class="sub-catalog-text"
                  :class="{'sub-catalog-current': currentProjectPaper === toPaperNameAka(paper.name)}"
                  @click="displayProjectPaper(toPaperNameAka(paper.name))">
            {{ getPaperAliasName(paper.name) }}
          </button>

        </template>

        <template #right>

          <button v-for="paper in useRightPapers"
                  :key="paper.name"
                  class="sub-catalog-text"
                  :class="{'sub-catalog-current': currentProjectPaper === toPaperNameAka(paper.name)}"
                  @click="displayProjectPaper(toPaperNameAka(paper.name))">
            {{ getPaperAliasName(paper.name) }}
          </button>

        </template>

      </left-right-layout>

    </div>

    <!-- Project PageModules Body -->
    <div class="paper">

      <router-view :key="route.path" />

    </div>

  </body-block>

</template>

<style scoped lang="css">

.card {
  @apply p-5 pt-0 text-black dark:text-white text-sm;

  .tip {
    @apply inline-block mx-1.5 px-4 rounded-full;
    @apply cursor-default;
  }

  .tip2 {
    @apply inline-block mx-2;
    @apply cursor-default;
  }

  .catalogue {
    @apply bg-gray-200/50 dark:bg-black/50 backdrop-blur-3xl;
    @apply text-black dark:text-white;
  }

  .language-card {
    @apply align-middle bg-gray-500/10 px-3 rounded-xl;

    & span {
      @apply text-xs px-1 underline underline-offset-2 decoration-dotted;
    }
  }

}

.card .archived,
.card .external,
.card .other {
  @apply text-gray-800 dark:text-gray-200;
  @apply bg-gray-300/50 dark:bg-gray-700/50;
}

.card .toplevel {
  @apply text-yellow-700 dark:text-yellow-300;
  @apply bg-yellow-200/50 dark:bg-yellow-800/50;
}

.card .sandbox {
  @apply text-green-700 dark:text-green-300;
  @apply bg-green-200/50 dark:bg-green-800/50;
}

.card .incubation {
  @apply text-pink-700 dark:text-pink-300;
  @apply bg-pink-200/50 dark:bg-pink-800/50;
}

.card .labs {
  @apply text-sky-800 dark:text-sky-300;
  @apply bg-sky-200/50 dark:bg-sky-800/50;
}

.card .translation {
  @apply text-purple-800 dark:text-purple-300;
  @apply bg-purple-200/50 dark:bg-purple-800/50;
}

.go-back {
  @apply m-3 text-sm;
  @apply hover:text-purple-500 font-bold border-b-4 border-purple-500;
  font-family: 'Lexend', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
}

.sub-catalog {
  @apply mt-3;
  @apply bg-white dark:bg-black/50 backdrop-blur-3xl rounded-2xl;
  @apply font-light;
}

.sub-catalog-text {
  @apply inline-block px-3 py-2 align-middle;
  @apply text-sm;
  @apply first:pl-5 last:pr-5;
}

.sub-catalog-current {
  @apply font-black;
}
</style>