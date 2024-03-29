import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/about/who-we-are",
    name: "about/who-we-are",
    component: () => import("../views/about/WhoWeAreView.vue")
  },
  {
    path: "/about/join",
    name: "about/join",
    component: () => import("../views/about/JoinView.vue")
  },
  {
    path: "/about/story",
    name: "about/story",
    component: () => import("../views/about/StoryView.vue")
  },
  {
    path: "/about/story/page/:pageNo",
    name: "about/story-page",
    component: () => import("../views/about/StoryView.vue")
  },
  {
    path: "/about/story/:pathMatch(.*)*",
    name: "about/story-detail",
    component: () => import("../views/about/StoryDetail.vue")
  },
  {
    path: "/about/faq",
    name: "about/faq",
    component: () => import("../views/about/FaqView.vue")
  },
  {
    path: "/about/contact",
    name: "about/contact",
    component: () => import("../views/about/ContactView.vue")
  }
];

export default routes;