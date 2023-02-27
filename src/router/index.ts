import { createRouter, createWebHistory, RouteRecordRaw, } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@src/views/login/index.vue"),
        meta: {
            title: "登录页面",
        },
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
