<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from "vue";
import { useEmitter } from "@/hooks/useEmitter";
import { useUiStore } from "@/stores/uiStore";

import { setTitle } from "@/hooks/usePageToolkits";
import { loadProjectsAsync } from "@/hooks/useProjectToolkits";
import type { ProjectCardModel } from "@/apis/QueryProjectListApi";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import MemberProjects from "@/components/projects/MemberProjects.vue";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectCards from "@/components/projects/ProjectCards.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import Markdown from "@/components/markdown/MarkdownWorker.vue";

const uiStore = useUiStore();
const emitter = useEmitter();

const projects = reactive<ProjectCardModel[]>([]);

const updateProjects = (models: ProjectCardModel[]) => {
  projects.length = 0;
  for (const model of models) {
    projects.push(model);
  }
};

setTitle("project-archived-full", "i18n");

onMounted(async () => {

  emitter.on("toChangeLocale", async (e) => {
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

    <project-header feature-key="archived" />

    <span class="the-archived">
      {{ $t("project-archived-desc-more") }}
    </span>

    <project-cards :models="projects" for="archived" />

    <div class="the-archived content-paper">

      <markdown source="projects/projects-after-archived" :i18n="true" />

    </div>

    <placeholder-block height="20px" />

    <title-block h1-mode="false" color-mode="auto" :with-horizontal-rule="true" :is-font-black="false">
      {{ $t("project-other") }}
    </title-block>

    <span class="the-past">
      {{ $t("project-other-desc") }}
    </span>

    <project-cards :models="projects" for="other" />

    <div class="the-past content-paper">

      <markdown source="projects/projects-as-past" :i18n="true" />

    </div>

  </body-block>

  <placeholder-block height="20px" />

  <member-projects :models="projects">
    {{ $t("our-projects-title-by-name") }}
  </member-projects>

</template>

<style scoped lang="css">

.the-archived,
.the-archived .markdown-body,
.the-past,
.the-past .markdown-body {
  @apply block text-gray-500 dark:text-gray-400 text-lg;
  @apply p-5 mb-5;
}
</style>