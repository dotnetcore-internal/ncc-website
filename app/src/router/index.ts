import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/Home.vue"),
        },
        {
            path: "/all-ncc",
            name: "all-ncc",
            component: () => import("../views/about/AllNccView.vue"),
        },
        {
            path: "/wechat-open-ncc",
            name: "wechat-open-ncc",
            component: () => import("../views/about/OpenNccView.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "all",
            component: () => import("../views/404.vue"),
        }
    ]
});

export default router;
