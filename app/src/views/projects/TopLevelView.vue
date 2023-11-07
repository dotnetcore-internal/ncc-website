<script setup lang="ts">
import {onMounted, onUnmounted, reactive} from "vue";
import {useEmitter} from "@/hooks/useEmitter";
import {useUiStore} from "@/stores/uiStore";

import {setTitle} from "@/hooks/usePageToolkits";
import {loadProjectsAsync} from "@/hooks/useProjectToolkits";
import type {ProjectCardModel} from "@/apis/QueryProjectListApi";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import MemberProjects from "@/components/projects/MemberProjects.vue";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectCards from "@/components/projects/ProjectCards.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

const uiStore = useUiStore();
const emitter = useEmitter();

const projects = reactive<ProjectCardModel[]>([]);

const updateProjects = (models: ProjectCardModel[]) => {
  projects.length = 0;
  for (const model of models) {
    projects.push(model);
  }
}

setTitle('project-top-level-full', 'i18n');

onMounted(async () => {

  emitter.on('toChangeLocale', async (e) => {
    const event = e as { locale: string };
    await loadProjectsAsync(event.locale, updateProjects);
  });

  await loadProjectsAsync(uiStore.locale, updateProjects);
});

onUnmounted(() => {
  emitter.off("toChangeLocale");
});
</script>

<template>

  <body-block>

    <project-header feature-key="top-level"/>

    <project-cards :models="projects" for="top-level"/>

  </body-block>

  <placeholder-block height="90px"/>

  <member-projects :models="projects">
    {{ $t('our-projects-title-by-name') }}
  </member-projects>

</template>

<style scoped lang="css">

</style>