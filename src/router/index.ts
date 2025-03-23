import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import CurriculumVitae from "../pages/CurriculumVitaePage.vue";
// import BlogPage from "@/pages/BlogPage.vue";
// import ConsultingPage from "@/pages/ConsultingPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/cv",
    name: "CurriculumVitae",
    component: CurriculumVitae,
    meta: {
      title: "CurriculumVitae",
    },
    // path: "/blog",
    // name: "blog",
    // component: Blog,
    // meta: {
    //   title: "Blog",
    // },
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
