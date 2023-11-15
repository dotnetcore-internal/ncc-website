import axios from "axios";
import {NumberVersionModel} from "@/apis/QueryProjectListApi";

export interface LicenseModel {
    id: string;
    name: string;
    description: string;
    permissions: string[];
    limitations: string[];
    conditions: string[];
    'osi-approved': boolean;
    'osi-link': string;
    'def-link': string;
}

export class LicenseQueryDto {
    _metadata: NumberVersionModel = new NumberVersionModel();
    licenses: LicenseModel[] = [];
}

export const queryProjectLicense = async function (
    callback: (data: LicenseQueryDto) => void,
    fallback: () => void = () => {
    }
) {
    await axios.get<LicenseQueryDto>(`/api/projects/license-cross.json`)
        .then(function (response) {
            callback(response.data);
        })
        .catch(fallback)
};