<script setup lang="ts">
import {computed, ref} from "vue";
import {usePreferredDark} from "@vueuse/core";
import {filterProjects, groupProjectsByCatalogue, groupProjectsByLetter, groupProjectsByStatus, sortProjects} from "@/hooks/useProjectToolkits";
import {type CatalogueMap, ProjectCardModel} from "@/apis/QueryProjectListApi";

import {AlphabeticalSorting, AlphabeticalSortingTwo} from "@icon-park/vue-next";
import ProjectCard from "@/components/projects/ProjectCard.vue";

const props = withDefaults(defineProps<{
  models: ProjectCardModel[];
  catalogues?: CatalogueMap;
  for?: 'all' | 'full' | 'sandbox' | 'top-level' | 'archived' | 'incubation' | 'labs' | 'translation' | 'other';
  box?: boolean;
  enableSort?: boolean;
  enableGroupedByCatalogue?: boolean;
  enableGroupByStatus?: boolean;
  enableGroupByLetter?: boolean;
  groupedAsDefault?: 'catalogue' | 'letter' | 'status';
  sortAsDefault?: 'asc' | 'desc';
}>(), {
  for: 'all',
  box: false,
  enableSort: true,
  enableGroupedByCatalogue: false,
  enableGroupByStatus: false,
  enableGroupByLetter: false,
  groupedAsDefault: 'catalogue',
  sortAsDefault: 'asc',
});

const isGroupedMode = ref<boolean>(props.enableSort === false && (props.enableGroupedByCatalogue || props.enableGroupByStatus || props.enableGroupByLetter));
const groupedBy = ref<'catalogue' | 'letter' | 'status'>(props.groupedAsDefault);
const sortBy = ref<'asc' | 'desc'>(props.sortAsDefault);

const useProjects = computed(() => {
  return sortProjects(filterProjects(props.models, props.for), sortBy.value);
});

const useGroupedProjects = computed(() => {
  if (groupedBy.value === 'catalogue')
    return groupProjectsByCatalogue(filterProjects(props.models, 'full'));
  if (groupedBy.value === 'letter')
    return groupProjectsByLetter(filterProjects(props.models, 'full'));
  if (groupedBy.value === 'status')
    return groupProjectsByStatus(filterProjects(props.models, 'full'));
  return groupProjectsByCatalogue(filterProjects(props.models, 'full'));
});

const switchGroupedMode = (name?: string) => {
  if (name) {
    groupedBy.value = name as 'catalogue' | 'letter' | 'status';
    isGroupedMode.value = true;
    return;
  } else {
    isGroupedMode.value = false;
  }
};

const switchSortMode = () => {
  sortBy.value = sortBy.value === 'asc' ? 'desc' : 'asc';
};

const displayOpsBtnGroup = computed(() => {
  const a = props.enableSort ? 1 : 0;
  const b = props.enableGroupedByCatalogue ? 1 : 0;
  const c = props.enableGroupByStatus ? 1 : 0;
  const d = props.enableGroupByLetter ? 1 : 0;
  return a + b + c + d >= 2;
});

const currentPrefersDarkMode = usePreferredDark();
const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
      ? '#f8f8f8'
      : '#000000';
});

</script>

<template>

  <div v-show="displayOpsBtnGroup">

    <div class="group-btn cursor-pointer relative float-left">
      <span class="pl-3 text-xs align-middle">{{ $t('grouped-by')}} </span>
      <button @click="switchGroupedMode()" class="group-btn-text" :class="{'group-btn-current': !isGroupedMode}">{{ $t('grouped-by-none') }}</button>
      <button @click="switchGroupedMode('catalogue')" class="group-btn-text" :class="{'group-btn-current': isGroupedMode && groupedBy === 'catalogue'}">{{ $t('grouped-by-category') }}</button>
      <button @click="switchGroupedMode('status')" class="group-btn-text" :class="{'group-btn-current': isGroupedMode && groupedBy === 'status'}">{{ $t('grouped-by-status') }}</button>
    </div>

    <div @click="switchSortMode" class="sort-btn cursor-pointer relative float-right">
      <alphabetical-sorting class="sort-btn-icon" v-show="sortBy === 'desc'" theme="filled" size="16" :fill="useIconColor" :title="$t('sort-z-to-a')"/>
      <alphabetical-sorting-two class="sort-btn-icon" v-show="sortBy === 'asc'" theme="filled" size="16" :fill="useIconColor" :title="$t('sort-a-to-z')"/>
      <span class="sort-btn-text" v-show="sortBy === 'desc'" :title="$t('sort-z-to-a')">{{ $t('sort-z-to-a') }}</span>
      <span class="sort-btn-text" v-show="sortBy === 'asc'" :title="$t('sort-a-to-z')">{{ $t('sort-a-to-z') }}</span>
    </div>

    <div class="clear-both"></div>

  </div>

  <div v-show="isGroupedMode">

    <div v-for="(projects, groupName) in useGroupedProjects" :key="groupName" :class="{'project-group': box}">

      <div class="project-group-title" v-if="groupedBy === 'catalogue'">
        {{ catalogues ? catalogues[groupName] : groupName }}
      </div>
      <div class="project-group-title" v-if="groupedBy === 'status'">
        {{ $t(`project-${groupName}`) }}
      </div>

      <div class="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 gap-7">
        <project-card v-for="project in sortProjects(projects, sortBy)" :project="project" :key="project.id"/>
      </div>

    </div>

  </div>

  <div v-show="!isGroupedMode" :class="{'project-group': box}">

    <div class="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 gap-7">
      <project-card v-for="project in useProjects" :project="project" :key="project.id"/>
    </div>

  </div>

</template>

<style scoped lang="css">

.project-group {
  @apply my-6 p-5 rounded-3xl shadow-md;
  @apply bg-white/50 dark:bg-black/50 backdrop-blur-3xl;
}

.project-group-title {
  @apply inline-block mt-3 mb-5 ml-6;
  @apply text-black dark:text-white text-lg;
  @apply border-b-4 border-pink-500;
  font-family: 'Lexend', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
}

.sort-btn {
  @apply inline-block mt-3 mr-2;
  @apply font-light;
}

.group-btn {
  @apply inline-block mt-3;
  @apply bg-white dark:bg-black/50 backdrop-blur-3xl rounded-full;
  @apply font-light;
}

.sort-btn-icon {
  @apply inline-block align-middle;
}

.sort-btn-text {
  @apply inline-block ml-2 align-middle;
  @apply text-black dark:text-white;
  font-family: 'Lexend', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
}

.group-btn-text {
  @apply inline-block px-3 py-2 align-middle;
  @apply text-sm;
  @apply first:pl-5 last:pr-5;
}

.group-btn-current{
  @apply font-black;
}

</style>