import {getLocaleResource, getResource, updateLocaleResource, updateResource} from "@/hooks/useResource";
import {type CatalogueMap, type ProjectCardModel, queryProjectList} from "@/apis/QueryProjectListApi";
import {needUpdate} from "@/hooks/useProjectVer";
import {type LicenseModel, queryProjectLicense} from "@/apis/QueryProjectLicelseApi";
import {type ProjectMetadataModel, ProjectProfileModel, queryProjectMetadata, queryProjectProfile} from "@/apis/QueryProjectProfileApi";

//region Project Catalogue & Status

const catalogueTable = new Map<string, number>();
catalogueTable.set('dev-fx', 1);
catalogueTable.set('infra-middleware', 2);
catalogueTable.set('data', 3);
catalogueTable.set('application-library', 4);
catalogueTable.set('tools-env', 5);
catalogueTable.set('ui', 6);
catalogueTable.set('labs', 7);
catalogueTable.set('translation', 8);
catalogueTable.set('other', 9);

const statusTable = new Map<string, number>();
statusTable.set('top-level', 1);
statusTable.set('incubation', 2);
statusTable.set('sandbox', 3);
statusTable.set('labs', 4);
statusTable.set('translation', 5);
statusTable.set('archived', 6);
statusTable.set('other', 7);

const internalSortForCatalogueName = (a: string, b: string) => {
    return (catalogueTable.get(a) ?? 0) - (catalogueTable.get(b) ?? 0);
}

const internalSortForStatusName = (a: string, b: string) => {
    return (statusTable.get(a) ?? 0) - (statusTable.get(b) ?? 0);
}

//endregion

//region Project List Operations

const loadProjectsAsync = async (
    locale: string,
    updateProjectsFn: (projects: ProjectCardModel[]) => void,
    updateCataloguesFn?: (catalogues: CatalogueMap) => void,
    fallbackFn?: () => void,
    projectsResourceKey: string = 'project-list-api'
) => {
    // get the projects from local storage first
    const localStorageProjects = getLocaleResource(projectsResourceKey, locale);

    if (!!localStorageProjects && !needUpdate(Number.parseInt(localStorageProjects['_metadata']['version']))) {
        updateProjectsFn(localStorageProjects['projects']);
        if (updateCataloguesFn) {
            updateCataloguesFn(localStorageProjects._catalogues);
        }
    } else {
        await queryProjectList(
            locale,
            (data) => {
                updateProjectsFn(data.projects);
                if (updateCataloguesFn) {
                    updateCataloguesFn(data._catalogues);
                }
                updateLocaleResource(projectsResourceKey, locale, data)
            },
            () => {
                if (fallbackFn) {
                    fallbackFn();
                }
            }
        )
    }
};

const filterProjects = (
    models: ProjectCardModel[],
    status: 'all' | 'full' | 'sandbox' | 'top-level' | 'archived' | 'incubation' | 'labs' | 'translation' | 'other') => {
    if (status === 'full')
        return models.filter(project => project.status !== 'other');
    if (status === 'all')
        return models.filter(project => project.status !== 'labs' && project.status !== 'translation' && project.status !== 'other');
    return models.filter(project => project.status === status);
};

const sortProjects = (models: ProjectCardModel[], orderBy: 'asc' | 'desc' = 'asc') => {
    return models.sort((a, b) => {
            if (orderBy === 'asc')
                return a.name.localeCompare(b.name);
            else
                return b.name.localeCompare(a.name);
        }
    );
}

const groupProjectsByCatalogue = (models: ProjectCardModel[]) => {
    const groupedProjects = models.reduce((acc, model) => {
        const {catalogue: groupName, ...rest} = model;
        if (!acc[groupName]) {
            acc[groupName] = [];
        }
        //@ts-ignore
        acc[groupName].push(rest);
        return acc;
    }, {} as { [key: string]: ProjectCardModel[] });

    const sortedKeys = Object.keys(groupedProjects).map(String).sort(internalSortForCatalogueName);
    const finalProjects = {} as { [key: string]: ProjectCardModel[] };
    for (const sortedKey of sortedKeys) {
        const t = groupedProjects[sortedKey];
        if (!finalProjects[sortedKey]) {
            finalProjects[sortedKey] = [];
        }
        for (const v of t) {
            finalProjects[sortedKey].push(v);
        }
    }

    return finalProjects;
};

const groupProjectsByStatus = (models: ProjectCardModel[]) => {
    const groupedProjects = filterProjects(models, 'all').reduce((acc, model) => {
        const {status: groupName} = model;
        if (!acc[groupName]) {
            acc[groupName] = [];
        }
        //@ts-ignore
        acc[groupName].push(model);
        return acc;
    }, {} as { [key: string]: ProjectCardModel[] });

    const sortedKeys = Object.keys(groupedProjects).map(String).sort(internalSortForStatusName);
    const finalProjects = {} as { [key: string]: ProjectCardModel[] };
    for (const sortedKey of sortedKeys) {
        const t = groupedProjects[sortedKey];
        if (!finalProjects[sortedKey]) {
            finalProjects[sortedKey] = [];
        }
        for (const v of t) {
            finalProjects[sortedKey].push(v);
        }
    }

    return finalProjects;
}

const groupProjectsByLetter = (models: ProjectCardModel[]) => {
    return models.reduce((acc, model) => {
        const {name: groupName} = model;
        const letter = groupName.charAt(0).toUpperCase();
        if (!acc[letter]) {
            acc[letter] = [];
        }
        //@ts-ignore
        acc[letter].push(model);
        return acc;
    }, {} as { [key: string]: ProjectCardModel[] });
}

//endregion

//region Project License

const loadLicensesAsync = async (
    updateLicensesFn: (licenses: LicenseModel[]) => void,
    fallbackFn?: () => void,
    licenseResourceKey: string = 'project-license-api'
) => {
    // get the projects from local storage first
    const storageLicenses = getResource(licenseResourceKey);

    if (!!storageLicenses && !needUpdate(Number.parseInt(storageLicenses['_metadata']['version']))) {

        updateLicensesFn(storageLicenses['licenses']);

    } else {

        await queryProjectLicense(
            (data) => {
                updateLicensesFn(data.licenses);
                updateResource(licenseResourceKey, data)
            },
            () => {
                if (fallbackFn) {
                    fallbackFn();
                }
            }
        )
    }

};


//endregion

//region Project Metadata & Profile

const loadProjectMetadataAsync = async (
    name: string,
    updateMetadataFn: (metadata: ProjectMetadataModel) => void,
    fallbackFn?: () => void,
    metadataResourceKey: string = 'project-metadata-api'
) => {
    const key = `${metadataResourceKey}/${name}`;
    const storageMetadata = getResource(key);

    if (!!storageMetadata && !needUpdate(Number.parseInt(storageMetadata['_metadata']['version']))) {

        updateMetadataFn(storageMetadata);

    } else {

        await queryProjectMetadata(
            name,
            (data) => {
                updateMetadataFn(data);
                updateResource(key, data)
            },
            () => {
                if (fallbackFn) {
                    fallbackFn();
                }
            }
        )
    }
};

const loadProjectProfileAsync = async (
    locale: string,
    name: string,
    updateProfileFn: (profile: ProjectProfileModel) => void,
    fallbackFn?: () => void,
    profileResourceKey: string = 'project-profile-api'
) => {
    const key = `${profileResourceKey}/${name}`;
    const localeStorageMetadata = getLocaleResource(key, locale);

    if (!!localeStorageMetadata && !needUpdate(Number.parseInt(localeStorageMetadata['_metadata']['version']))) {

        updateProfileFn(localeStorageMetadata);

    } else {

        await queryProjectProfile(
            locale,
            name,
            (data) => {
                updateProfileFn(data);
                updateLocaleResource(key, locale, data)
            },
            () => {
                if (fallbackFn) {
                    fallbackFn();
                }
            }
        )
    }
};


//endregion

export {
    filterProjects,
    sortProjects,
    groupProjectsByCatalogue,
    groupProjectsByStatus,
    groupProjectsByLetter,
    loadProjectsAsync,
    loadLicensesAsync,
    loadProjectMetadataAsync,
    loadProjectProfileAsync,
};