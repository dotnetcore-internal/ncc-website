import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/news',
        name: 'news',
        component: () => import("../views/news/NewsIndexView.vue"),
    },
    {
        path: '/weekly',
        name: 'weekly',
        component: () => import("../views/weekly/WeeklyIndexView.vue"),
    },
    {
        path: '/announcements',
        name: 'announcements',
        component: () => import("../views/announcements/AnnouncementsIndexView.vue"),
    }
];

export default routes;