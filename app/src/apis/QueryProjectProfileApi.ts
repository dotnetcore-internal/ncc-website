import axios from "axios";

export class ProjectBio {
  id: string = "";
  name: string = "";
  logo: string = "";
}

export class ProjectIndex {
  catalogue: string = "";
  status: string = "sandbox";
  external: boolean = false;
  language: string[] = [];
}

export class ProjectSource {
  github?: string = "";
  gitee?: string = "";
  website?: string = "";
}

export interface hasProjectLeader {
  leader: ProjectLeaderModel;
}

export interface hasProjectLicense {
  license: ProjectLicenseDescriptor | ProjectLicenseDescriptor[];
}

export interface hasProjectModule {
  modules: ProjectModuleDescriptor[];
}

export interface hasI18nSupport {
  "i18n-support": string[];
}

export type BaseProjectModel = ProjectBio & ProjectIndex & ProjectSource & hasProjectLeader;

export type ProjectMetadataModel = BaseProjectModel & hasProjectLicense & hasProjectModule & hasI18nSupport;

export class ProjectLeaderModel {
  name: string = "";
  url: string = "";
}

export class ProjectLicenseDescriptor {
  name: string = "";
  file?: string;
}

export class ProjectDescriptionModel {
  description: string = "";
}

export class ProjectProfileModel extends ProjectDescriptionModel {
  modules: any = {};
}

export class ProjectModuleDescriptor {
  name: string = "";
  sort: number = 0;
  float?: "left" | "right" = "left";
  "in-build": boolean = false;
}

export const queryProjectMetadata = async function(
  name: string,
  callback: (data: ProjectMetadataModel) => void,
  fallback: () => void = () => {
  }
) {
  await axios.get<ProjectMetadataModel>(`/api/projects/${name}/metadata.json`)
    .then(function(response) {
      callback(response.data);
    })
    .catch(fallback);
};

export const queryProjectProfile = async function(
  locale: string,
  name: string,
  callback: (data: ProjectProfileModel) => void,
  fallback: () => void = () => {
  }
) {
  const path = !!locale && locale.length > 0
    ? `/api/projects/${name}/profile.${locale}.json`
    : `/api/projects/${name}/profile.en.json`;

  await axios.get<ProjectProfileModel>(path)
    .then(function(response) {
      callback(response.data);
    })
    .catch(fallback);
};