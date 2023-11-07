<script setup lang="ts">
import {computed, onMounted, onUnmounted, reactive} from "vue";
import {useEmitter} from "@/hooks/useEmitter";
import {useUiStore} from "@/stores/uiStore";
import {type CatalogueMap, ProjectCardModel, queryProjectList} from "@/apis/QueryProjectListApi";
import {getLocaleResource, updateLocalResource} from "@/i18n";
import {needUpdate} from "@/hooks/useProjectVer";
import ProjectCard from "@/components/projects/ProjectCard.vue";

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

const filterProjects = (status: 'all' | 'sandbox' | 'top-level' | 'archived' | 'incubation' | 'labs' | 'translation' | 'full') => {
  if (status === 'full')
    return projects;
  if (status === 'all')
    return projects.filter(project => project.status !== 'labs' && project.status !== 'translation');
  return projects.filter(project => project.status === status);
}

const sortProjects = (models: ProjectCardModel[]) => {
  return models.sort((a, b) => a.name.localeCompare(b.name));
}

const groupProject = (models: ProjectCardModel[]) => {
  return models.reduce((acc, model) => {
    const {catalogue: catalogueName, ...rest} = model;
    if (!acc[catalogueName]) {
      acc[catalogueName] = [];
    }
    //@ts-ignore
    acc[catalogueName].push(rest);
    return acc;
  }, {} as { [key: string]: ProjectCardModel[] });
};

const useProjects = computed(() => {
  return groupProject(filterProjects('full'));
});

const loadProjectList = (locale: string) => {
  // get the projects from local storage first
  const localStorageProjects = getLocaleResource('project-list-api', locale);

  if (!!localStorageProjects && !needUpdate(Number.parseInt(localStorageProjects['_metadata']['version']))) {
    updateProjects(localStorageProjects['projects']);
    updateCatalogues(localStorageProjects['_catalogues']);
  } else {

    queryProjectList(
        locale,
        (data) => {
          updateProjects(data.projects);
          updateCatalogues(localStorageProjects['_catalogues']);
          updateLocalResource('project-list-api', locale, data)
        },
        () => {
        }
    )

  }
}

const getCatalogueName = (catalogue: string): string => {
  return catalogues[catalogue];
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

  <div v-for="(projects, catalogue) in useProjects" :key="catalogue">

    <div class="text-black dark:text-white">{{ getCatalogueName(catalogue) }}</div>

    <div class="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 gap-7">
      <project-card v-for="project in sortProjects(projects)" :project="project" :key="project.id"/>
    </div>

  </div>

</template>

<style scoped lang="css">

</style>