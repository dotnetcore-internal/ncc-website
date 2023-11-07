import axios from "axios";

export class NumberVersionModel {
    version: number = 0;
    locale: string = 'en';
}

export class ProjectCardModel {
    id: string = '';
    name: string = "";
    description: string = "";
    logo: string = "";
    github?: string = "";
    gitee?: string = "";
    website?: string = "";
    catalogue: string = '';
    status: string = 'sandbox';
    leader: ProjectCardLeaderModel = new ProjectCardLeaderModel();
    external: boolean = false;
}

export class ProjectCardLeaderModel {
    name: string = '';
    url: string = '';
}

export interface CatalogueMap {
    [key: string]: string
}

export class ProjectListQueryDto {
    _metadata: NumberVersionModel = new NumberVersionModel();
    _catalogues: CatalogueMap = {};
    projects: ProjectCardModel[] = [];
}

export const queryProjectList = async function (
    locale: string = 'en',
    callback: (data: ProjectListQueryDto) => void,
    fallback: () => void = () => {
    }
) {
    await axios.get<ProjectListQueryDto>(`/api/projects-list.${locale}.json`)
        .then(function (response) {
            callback(response.data);
        })
        .catch(fallback)
};