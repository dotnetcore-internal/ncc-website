import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";
import peopleRoutes from "@/router/PeopleRoutes";
import projectRoutes from "@/router/ProjectRoutes";
import meetupRoutes from "@/router/MeetupRoutes";
import mediaRoutes from "@/router/MediaRoutes";
import ruleRoutes from "@/router/RuleRoutes";
import aboutRoutes from "@/router/AboutRoutes";

const baseRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue"),
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
        path: "/conduct",
        name: "conduct",
        component: () => import("../views/CodeOfConductView.vue"),
    },
    {
        path: "/community-online",
        name: "community-online",
        component: () => import("../views/CommunityOnlineView.vue"),
    },
    {
        path: "/participation-guidelines",
        name: "participation-guidelines",
        component: () => import("../views/guidelines/ParticipationGuidelinesView.vue"),
    },
    {
        path: "/brand-guidelines",
        name: "brand-guidelines",
        component: () => import("../views/guidelines/BrandGuidelinesView.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "all",
        component: () => import("../views/404View.vue"),
    }
];

const routes = baseRoutes.concat(peopleRoutes, projectRoutes, meetupRoutes, mediaRoutes, ruleRoutes, aboutRoutes);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

export default router;
