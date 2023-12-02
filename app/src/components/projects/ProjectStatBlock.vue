<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import { useUiStore } from "@/stores/uiStore";
import { filterProjects, loadProjectsAsync } from "@/hooks/useProjectToolkits";
import type { ProjectCardModel } from "@/apis/QueryProjectListApi";

import Anchor from "@/components/basic/AnchorElement.vue";
import AnimateNumber from "@/components/basic/AnimateNumber.vue";

const uiStore = useUiStore();
const projects = reactive<ProjectCardModel[]>([]);

const props = withDefaults(defineProps<{
  models?: ProjectCardModel[];
}>(), {});

const updateProjects = (models: ProjectCardModel[]) => {
  projects.length = 0;
  for (const model of models) {
    projects.push(model);
  }
};

const useTopLevelProjectCount = computed(() => {
  return filterProjects(projects, "top-level").length;
});

const useTotalProjectCount = computed(() => {
  return filterProjects(projects, "full").length;
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

  <div class="responsive-width grid lg:grid-cols-4 grid-cols-2 px-6">

    <anchor href="/top-level-projects" :title="$t('project-top-level-full')" mode="classic" class="number-card block">
        <span class="number">
          <animate-number :from="0" :to="useTopLevelProjectCount" duration="500" :key="useTopLevelProjectCount" />
        </span>
      <span class="desc">
          <span class="">Top-Level</span>
          <span>Projects</span>
        </span>
    </anchor>

    <anchor href="/projects" :title="$t('project-all-full')" mode="classic" class="number-card block">
        <span class="number">
          <animate-number :from="0" :to="useTotalProjectCount" duration="500" :key="useTotalProjectCount" />
        </span>
      <span class="desc">
          <span class="">Member</span>
          <span>Projects</span>
        </span>
    </anchor>

    <div class="number-card cursor-default">
        <span class="number">
          <animate-number :from="0" :to="100" duration="3000">+</animate-number>
        </span>
      <span class="desc">
          <span class="">NCC</span>
          <span>Members</span>
        </span>
    </div>

    <div class="number-card cursor-default">
        <span class="number">
          <animate-number :from="0" :to="100" duration="3000">M+</animate-number>
        </span>
      <span class="desc">
          <span class="">NuGet</span>
          <span>Downloads</span>
        </span>
    </div>

  </div>

</template>

<style scoped lang="css">

.number-card {
  @apply uppercase;

  .number {
    @apply text-5xl font-bold;
    @apply inline-block align-middle;
  }

  .desc {
    @apply text-left font-medium;
    @apply block lg:inline-block align-middle;
    @apply lg:ml-3 mb-4 lg:mb-0;

    & span {
      @apply lg:block;
      @apply pr-2 lg:pr-0;
    }
  }
}

</style>