import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/news",
    name: "news",
    component: () => import("../views/news/NewsIndexView.vue")
  },
  {
    path: "/weekly",
    name: "weekly",
    component: () => import("../views/weekly/WeeklyIndexView.vue")
  },
  {
    path: "/announcements",
    name: "announcements",
    component: () => import("../views/announcements/AnnouncementsIndexView.vue")
  },
  {
    path: "/news/page/:pageNo",
    name: "news-page",
    component: () => import("../views/news/NewsIndexView.vue")
  },
  {
    path: "/weekly/page/:pageNo",
    name: "weekly-page",
    component: () => import("../views/weekly/WeeklyIndexView.vue")
  },
  {
    path: "/announcements/page/:pageNo",
    name: "announcements-page",
    component: () => import("../views/announcements/AnnouncementsIndexView.vue")
  },
  {
    path: "/news/:pathMatch(.*)*",
    name: "news-detail",
    component: () => import("../views/news/NewsDetailView.vue")
  },
  {
    path: "/weekly/:pathMatch(.*)*",
    name: "weekly-detail",
    component: () => import("../views/weekly/WeeklyDetailView.vue")
  },
  {
    path: "/announcements/:pathMatch(.*)*",
    name: "announcements-detail",
    component: () => import("../views/announcements/AnnouncementDetailView.vue")
  }
];

export default routes;