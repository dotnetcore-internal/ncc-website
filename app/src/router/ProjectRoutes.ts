import type {RouteLocationNormalized, RouteRecordRaw} from "vue-router";

const projectDetailPropFn = function (route: RouteLocationNormalized) {
    return {
        akaId: route.params.id
    };
};

const routes: RouteRecordRaw[] = [
    {
        path: '/projects',
        name: 'projects',
        component: () => import("../views/projects/AllProjectsView.vue"),
    },
    {
        path: '/archived-projects',
        name: 'archived-projects',
        component: () => import("../views/projects/ArchivedView.vue"),
    },
    {
        path: '/top-level-projects',
        name: 'top-level-projects',
        component: () => import("../views/projects/TopLevelView.vue"),
    },
    {
        path: '/project-maturity-model',
        name: 'project-maturity-model',
        component: () => import("../views/projects/ProjectMaturityModelView.vue"),
    },
    {
        path: '/project/not-found',
        name: 'project-not-found',
        component: () => import("../views/projects/ProjectNotFound.vue"),
    },
    {
        path: '/projects/:id',
        name: 'projects/:id',
        component: () => import("../views/projects/ProjectDetailView.vue"),
        props: projectDetailPropFn,
        children: [
            {
                path: "metrics",
                component: () => import("../views/projects/details/MetricsPage.vue")
            },
            {
                path: "get-started",
                component: () => import("../views/projects/details/GetStartedPage.vue")
            },
            {
                path: "features",
                component: () => import("../views/projects/details/FeaturesPage.vue")
            },
            {
                path: "license",
                component: () => import("../views/projects/details/LicensePage.vue")
            },
            {
                path: "paper-not-found",
                component: () => import("../views/projects/details/CustomPageNotFound.vue")
            },
            {
                path: ":customName",
                component: () => import("../views/projects/details/CustomPage.vue")
            },
            {
                path: "",
                component: () => import("../views/projects/details/GeneralPage.vue")
            }
        ]
    }
];

export default routes;