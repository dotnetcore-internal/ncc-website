<script setup lang="ts">
import {computed, onMounted, onUnmounted, reactive} from "vue";
import {useEmitter} from "@/hooks/useEmitter";
import {useUiStore} from "@/stores/uiStore";
import {ProjectCardModel, queryProjectList} from "@/apis/QueryProjectListApi";

import {getLocaleResource, updateLocalResource} from "@/i18n";
import {needUpdate} from "@/hooks/useProjectVer";

import ProjectCard from "@/components/projects/ProjectCard.vue";

const uiStore = useUiStore();
const emitter = useEmitter();
const projects = reactive<ProjectCardModel[]>([]);

const props = withDefaults(defineProps<{
  for?: 'all' | 'sandbox' | 'top-level' | 'archived' | 'incubation' | 'labs' | 'translation';
}>(), {
  for: 'all'
});

const updateProjects = (models: ProjectCardModel[]) => {
  projects.length = 0;
  for (const model of models) {
    projects.push(model);
  }
}

const filterProjects = (status: 'all' | 'sandbox' | 'top-level' | 'archived' | 'incubation' | 'labs' | 'translation') => {
  if (status === 'all')
    return projects.filter(project => project.status !== 'labs' && project.status !== 'translation');
  return projects.filter(project => project.status === status);
}

const sortProjects = (models: ProjectCardModel[]) => {
  return models.sort((a, b) => a.name.localeCompare(b.name));
}

const useProjects = computed(() => {
  return sortProjects(filterProjects(props.for));
});

const loadProjectList = (locale: string) => {
  // get the projects from local storage first
  const localStorageProjects = getLocaleResource('project-list-api', locale);

  if (!!localStorageProjects && !needUpdate(Number.parseInt(localStorageProjects['_metadata']['version']))) {
    updateProjects(localStorageProjects['projects']);
  } else {

    queryProjectList(
        locale,
        (data) => {
          updateProjects(data.projects);
          updateLocalResource('project-list-api', locale, data)
        },
        () => {
        }
    )

  }
}

onMounted(() => {
  emitter.on('toChangeLocale', (e) => {
    const event = e as { locale: string };
    loadProjectList(event.locale);
  });

  loadProjectList(uiStore.locale);
});

onUnmounted(() => {
  emitter.off("toChangeLocale");
});
</script>

<template>

  <div class="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 gap-7">
    <project-card v-for="project in useProjects" :project="project" :key="project.id"/>
  </div>

</template>

<style scoped lang="css">

</style>