<script setup lang="ts">
import {onMounted, onUnmounted, reactive} from "vue";
import {useEmitter} from "@/hooks/useEmitter";
import {useUiStore} from "@/stores/uiStore";

import {setTitle} from "@/hooks/usePageToolkits";
import {loadProjectsAsync} from "@/hooks/useProjectToolkits";
import type {CatalogueMap, ProjectCardModel} from "@/apis/QueryProjectListApi";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import MemberProjects from "@/components/projects/MemberProjects.vue";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectCards from "@/components/projects/ProjectCards.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";

const uiStore = useUiStore();
const emitter = useEmitter();

const projects = reactive<ProjectCardModel[]>([]);
const catalogues = reactive<CatalogueMap>({});

const updateProjects = (models: ProjectCardModel[]) => {
  projects.length = 0;
  for (const model of models) {
    projects.push(model);
  }
}

const updateCatalogues = (catalog: CatalogueMap) => {
  for (const key in catalog) {
    catalogues[key] = catalog[key];
  }
}

setTitle('project-all-full', 'i18n');

onMounted(async () => {

  emitter.on('toChangeLocale', async (e) => {
    const event = e as { locale: string };
    await loadProjectsAsync(event.locale, updateProjects, updateCatalogues);
  });

  await loadProjectsAsync(uiStore.locale, updateProjects, updateCatalogues);
});

onUnmounted(() => {
  emitter.off("toChangeLocale");
});

</script>

<template>

  <body-block>

    <project-header feature-key="all"/>

    <project-cards :models="projects"
                   :catalogues="catalogues"
                   for="all"
                   for-when-group="full"
                   :box="true"
                   :enable-sort="true"
                   :enable-grouped-by-catalogue="true"
    />

    <placeholder-block height="90px"/>

    <title-block h1-mode="false"
                 color-mode="auto"
                 :with-horizontal-rule="true"
                 :is-font-black="false">
      {{ $t('our-laboratory-projects-title') }}
    </title-block>

    <span class="the-labs">
      {{ $t('project-laboratory-desc') }}
    </span>

    <project-cards :models="projects" for="labs"/>

    <placeholder-block height="90px"/>

    <title-block h1-mode="false"
                 color-mode="auto"
                 :with-horizontal-rule="true"
                 :is-font-black="false">
      {{ $t('our-translation-projects-title') }}
    </title-block>

    <span class="the-translation">
      {{ $t('project-translation-desc') }}
    </span>

    <project-cards :models="projects" for="translation"/>

    <placeholder-block height="90px"/>

  </body-block>

  <member-projects :models="projects">
    {{ $t('our-projects-title-by-name') }}
  </member-projects>

</template>

<style scoped lang="css">
.the-labs, .the-translation {
  @apply block text-gray-500 dark:text-gray-400 text-lg;
  @apply p-5 mb-5;
}
</style>