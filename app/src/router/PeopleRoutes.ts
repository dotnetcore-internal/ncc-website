import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/people/project-management-committee',
        name: 'people/project-management-committee',
        component: () => import("../views/people/ProjectManagementCommitteeView.vue"),
    }
];

export default routes;