import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/rules',
        name: 'rules',
        component: () => import("../views/rules/index.vue"),
    }
];

export default routes;