import axios from "axios";
import type {ProjectDescriptionModel, BaseProjectModel} from "@/apis/QueryProjectProfileApi";

export class NumberVersionModel {
    version: number = 0;
    locale: string = 'en';
}

export type ProjectCardModel = BaseProjectModel & ProjectDescriptionModel;

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