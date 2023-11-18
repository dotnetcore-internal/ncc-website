import { reactive } from "vue";
import { defineStore } from "pinia";
import type { ProjectMetadataModel, ProjectProfileModel } from "@/apis/QueryProjectProfileApi";

export const useProjectStore = defineStore("project", () => {

  const currentProjectMetadata = reactive<ProjectMetadataModel>({} as ProjectMetadataModel);

  const setCurrentProjectMetadata = (projectMetadata: ProjectMetadataModel) => {
    currentProjectMetadata.id = projectMetadata.id;
    currentProjectMetadata.name = projectMetadata.name;
    currentProjectMetadata.logo = projectMetadata.logo;
    currentProjectMetadata.github = projectMetadata.github;
    currentProjectMetadata.gitee = projectMetadata.gitee;
    currentProjectMetadata.website = projectMetadata.website;
    currentProjectMetadata.catalogue = projectMetadata.catalogue;
    currentProjectMetadata.status = projectMetadata.status;
    currentProjectMetadata.leader = projectMetadata.leader;
    currentProjectMetadata.external = projectMetadata.external;
    currentProjectMetadata.license = projectMetadata.license;
    currentProjectMetadata.modules = projectMetadata.modules;
    currentProjectMetadata["i18n-support"] = projectMetadata["i18n-support"];
  };

  const currentProjectProfile = reactive<ProjectProfileModel>({} as ProjectProfileModel);

  const setCurrentProjectProfile = (projectProfile: ProjectProfileModel) => {
    currentProjectProfile.description = projectProfile.description;
    currentProjectProfile.modules = projectProfile.modules;
  };

  return {
    currentProjectMetadata,
    setCurrentProjectMetadata,
    currentProjectProfile,
    setCurrentProjectProfile
  };
});