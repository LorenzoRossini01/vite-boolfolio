import { createRouter, createWebHistory } from "vue-router";

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
      name: "projects",
      component: ProjectsPage,
    },
  ],
});

export { router };
