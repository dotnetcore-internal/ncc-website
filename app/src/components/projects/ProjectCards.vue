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

const getCatalogueName = (groupName: string): string => {
  if (groupedBy.value === 'catalogue')
    return props.catalogues ? props.catalogues[groupName] : groupName;
  return groupName;
}

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
    <span>
      <button v-show="groupedBy !== 'catalogue'" @click="switchGroupedMode('catalogue')" class="btn btn-sm btn-outline-primary">按分类查看</button>
      <button v-show="groupedBy !== 'status'" @click="switchGroupedMode('status')" class="btn btn-sm btn-outline-primary">按状态查看</button>
      <button v-show="isGroupedMode" @click="switchGroupedMode()" class="btn btn-sm btn-outline-primary">按项目查看</button>
    </span>
    <span @click="switchSortMode">
      <alphabetical-sorting v-show="sortBy === 'desc'" theme="filled" size="16" :fill="useIconColor" title="A to Z"/>
      <alphabetical-sorting-two v-show="sortBy === 'asc'" theme="filled" size="16" :fill="useIconColor" title="Z to A"/>
    </span>
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
  @apply bg-white;
}

.project-group-title {
  @apply inline-block mt-3 mb-5 ml-6;
  @apply text-black dark:text-white text-lg;
  @apply border-b-4 border-pink-500;
  font-family: 'Lexend', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
}

</style>