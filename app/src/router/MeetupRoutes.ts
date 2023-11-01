import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/meetup',
        name: 'meetup',
        component: () => import("../views/meetup/MeetupIndexView.vue"),
    }
];

export default routes;