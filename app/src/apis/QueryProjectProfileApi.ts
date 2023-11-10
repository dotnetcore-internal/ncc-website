import axios from "axios";


export class BaseProjectModel {
    id: string = '';
    name: string = "";
    logo: string = "";
    github?: string = "";
    gitee?: string = "";
    website?: string = "";
    catalogue: string = '';
    status: string = 'sandbox';
    leader: ProjectLeaderModel = new ProjectLeaderModel();
    external: boolean = false;
}

export class ProjectLeaderModel {
    name: string = '';
    url: string = '';
}

export class ProjectMetadataModel extends BaseProjectModel {
    license: ProjectLicenseDescriptor | ProjectLicenseDescriptor[] = [];
    modules: ProjectModuleDescriptor[] = [];
    "i18n-support": string[] = [];
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
    float?: 'left' | 'right' = 'left';
    "in-build": boolean = false;
}

export const queryProjectMetadata = async function (
    name: string,
    callback: (data: ProjectMetadataModel) => void,
    fallback: () => void = () => {
    }
) {
    await axios.get<ProjectMetadataModel>(`/api/projects/${name}/metadata.json`)
        .then(function (response) {
            callback(response.data);
        })
        .catch(fallback)
};

export const queryProjectProfile = async function (
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
        .then(function (response) {
            callback(response.data);
        })
        .catch(fallback)
};