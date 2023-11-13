export class FeatureGroupModel {
    id: string = 'unclassified-1';
    title: string = 'Unclassified 1';
    sort: number = 1;
    hidden?: boolean = true;
}

export class FeatureModel {
    id: string = '';
    title: string = '';
    sort: number = 1;
    group?: string = 'unclassified-1';
}

export class FeatureConfig {
    groups: FeatureGroupModel[] = [];
    features: FeatureModel[] = [];
}