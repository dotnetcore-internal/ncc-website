<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import { useUiStore } from "@/stores/uiStore";

import { filterProjects, groupProjectsByLetter, loadProjectsAsync } from "@/hooks/useProjectToolkits";
import type { ProjectCardModel } from "@/apis/QueryProjectListApi";

import LeftRightLayout from "@/components/basic/LeftRightLayout.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import TitleLink from "@/components/blocks/TitleLink.vue";
import Anchor from "@/components/basic/AnchorElement.vue";
import HorizontalRuleElement from "@/components/basic/HorizontalRuleElement.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

const uiStore = useUiStore();

const props = withDefaults(defineProps<{
  models?: ProjectCardModel[];
  displayMoreBtn?: boolean;
}>(), {
  displayMoreBtn: false
});

const projects = reactive<ProjectCardModel[]>([]);

const updateProjects = (models: ProjectCardModel[]) => {
  projects.length = 0;
  for (const model of models) {
    projects.push(model);
  }
};

const useGroupedProjectsByLetter = computed(() => {
  return groupProjectsByLetter(filterProjects(projects, "all"));
});

onMounted(async () => {
  if (!!props.models && props.models.length > 0) {
    updateProjects(props.models);
  } else {
    await loadProjectsAsync(uiStore.locale, updateProjects);
  }
});

</script>

<template>

  <div class="">

    <placeholder-block height="2rem" />

    <div class="responsive-width">

      <left-right-layout>

        <template #left>

          <title-block h1-mode="false" color-mode="auto" :with-horizontal-rule="false" :is-font-black="false" :with-placeholder="false">
            <span v-if="$slots['default']">
              <slot> </slot>
            </span>
            <span v-else>
              {{ $t("our-projects-title") }}
            </span>
          </title-block>

        </template>

        <template #right>

          <title-link class="mr-7 mt-9" v-if="displayMoreBtn" href="/projects" :title="$t('project-all')" mode="classic">
            {{ $t("more-project") }}
          </title-link>

        </template>

      </left-right-layout>

      <HorizontalRuleElement v-if="true" colorMode="auto" />


      <div class="text-lg font-light px-5 pb-10 sm:columns-4 lg:columns-5 columns-3">

        <div v-for="(projects, letter) in useGroupedProjectsByLetter" :key="letter">
          <div class="project-letter">{{ letter }}</div>

          <div v-for="project in projects" :key="project.id" class="project-name">
            <anchor :href="`/projects/${project.id}`" :title="project.name" mode="classic">
              {{ project.name }}
            </anchor>
          </div>

        </div>

      </div>

    </div>

    <placeholder-block height="2.5rem" />

  </div>

</template>

<style scoped lang="css">

.project-letter {
  @apply bg-gray-100 dark:bg-gray-300/10 w-1/6 m-0.5 rounded-2xl ;
  @apply text-xs text-gray-600 dark:text-gray-200 text-center font-extrabold leading-8;
}

.project-name {
  @apply dark:text-white leading-8;
  @apply no-underline;
  @apply hover:underline underline-offset-4 hover:text-purple-700 hover:dark:text-purple-100;
  font-size: 1rem;
}

</style>