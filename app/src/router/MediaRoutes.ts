import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/news',
        name: 'news',
        component: () => import("../views/news/index.vue"),
    },
    {
        path: '/announcements',
        name: 'announcements',
        component: () => import("../views/announcements/index.vue"),
    }
];

export default routes;