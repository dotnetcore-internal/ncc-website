import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/projects',
        name: 'projects',
        component: () => import("../views/projects/ProjectsIndexView.vue"),
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
        path: '/projects/:id',
        name: 'projects/:id',
        component: () => import("../views/projects/DetailView.vue"),
    }
];

export default routes;