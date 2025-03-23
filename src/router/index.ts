import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
// import CurriculumVitae from "@/pages/CurriculumVitae.vue";
// import BlogPage from "@/pages/BlogPage.vue";
// import ConsultingPage from "@/pages/ConsultingPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      title: "Home",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// Update document title on route change
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Thomas Crespo`;
  next();
});

export default router;
