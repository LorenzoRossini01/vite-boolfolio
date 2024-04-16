import { createRouter, createWebHistory } from "vue-router";

import ProjectDetailPage from "./pages/ProjectDetailPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import HomePage from "./pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "projects.index",
      component: ProjectsPage,
    },
    {
      path: "/projects/:slug",
      name: "projects.show",
      component: ProjectDetailPage,
    },
    {
      path: "/category/:category_id",
      name: "projects.filter-by-caregory",
      component: ProjectsPage,
    },
    {
      path: "/tag/:tag_id",
      name: "projects.filter-by-tag",
      component: ProjectsPage,
    },
  ],
});

export { router };
