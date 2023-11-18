import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/rules",
    name: "rules",
    component: () => import("../views/rules/RulesIndexView.vue")
  }
];

export default routes;