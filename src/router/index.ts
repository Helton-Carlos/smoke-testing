import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import('../pages/Home.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/contact",
    component: () => import('../pages/Contact.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('../pages/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;