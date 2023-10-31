import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/projects',
        name: 'projects',
        component: () => import("../views/projects/index.vue"),
    },
    {
        path: '/archived-projects',
        name: 'archived-projects',
        component: () => import("../views/projects/ArchivedView.vue"),
    },
    {
        path: '/projects/:id',
        name: 'projects/:id',
        component: () => import("../views/projects/DetailView.vue"),
    }
];

export default routes;