import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/a',
        name: 'A',
        component: ()=>import("../pages/A.vue"),
    },
    {
        path: '/b',
        name: 'B',
        component: ()=>import("../pages/B.vue"),
    },
    {
        path: '/c',
        name: 'C',
        component: ()=>import("../pages/C.vue"),
    },
    {
        path: '/d',
        name: 'D',
        component: ()=>import("../pages/D.vue"),
    },
]
export default createRouter({
    routes,
    history: createWebHistory(),
})
