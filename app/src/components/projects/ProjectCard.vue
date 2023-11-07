<script setup lang="ts">
import {computed} from "vue";

import type {ProjectCardModel} from "@/apis/QueryProjectListApi";

import Anchor from "@/components/basic/AnchorElement.vue";

const props = defineProps<{
  project: ProjectCardModel;
}>();

const useLogo = computed(() => {
  let url = props.project.logo;
  if (!url && url.length === 0)
    url = `/images/projects/${props.project.id}.png`;
  return url;
});

const useTitle = computed(() => {
  return props.project.name;
});

const useTips = computed(() => {
  let suffix = '';
  switch (props.project.status) {
    case 'top-level':
      suffix = ' (Top-Level)';
      break;
    case 'archived':
      suffix = ' (Archived)';
      break;
    case 'incubation':
      suffix = ' (Incubation)';
      break;
    case 'labs':
      suffix = ' (Lab)';
      break;
  }
  return `${useTitle.value}${suffix}`;
});

</script>

<template>
  <div class="block card hover:scale-105 transition-all ease-in-out duration-1000"
       :title="useTips">
    <anchor :href="`/projects/${project.id}`" :title="useTips" mode="classic">
      <img class="mx-auto p-4" :src="useLogo" :title="useTips" width="100" :alt="project.name"/>
      <span class="block text-lg text-center leading-7 px-5 pt-2">{{ useTitle }}</span>
      <span v-if="project.status==='archived'" class="tip archived">{{ $t('project-archived') }}</span>
      <span v-else-if="project.status==='top-level'" class="tip toplevel">{{ $t('project-top-level') }}</span>
      <span v-else-if="project.status==='incubation'" class="tip incubation">{{ $t('project-incubation') }}</span>
      <span v-else-if="project.status==='labs'" class="tip labs">{{ $t('project-laboratory') }}</span>
      <span v-else-if="project.status==='translation'" class="tip translation">{{ $t('project-translation') }}</span>
      <span v-if="project.external" class="tip external">{{ $t('project-external') }}</span>
    </anchor>
  </div>
</template>

<style scoped lang="css">
.card {
  @apply w-auto h-56 p-5 overflow-hidden;
  @apply hover:bg-white hover:dark:bg-black/50 rounded-2xl hover:shadow-lg;
  @apply text-black dark:text-white text-center;
}

.card .tip {
  @apply inline-block mt-3 px-2 rounded-full;
  @apply text-xs leading-5;
}

.card .archived,
.card .external{
  @apply text-gray-800 dark:text-gray-200;
  @apply bg-gray-300/50 dark:bg-gray-700/50;
}

.card .toplevel {
  @apply text-yellow-700 dark:text-yellow-300;
  @apply bg-yellow-200/50 dark:bg-yellow-800/50;
}

.card .incubation{
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

</style>