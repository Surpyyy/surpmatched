import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: () => import("../views/HomePage.vue")},
        {path: "/login", component: () => import("../views/RegisterPage.vue")},
    ]
})

export default router;