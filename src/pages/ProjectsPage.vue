<script>
import ProjectCard from "../components/ProjectCard.vue";
import PaginationUI from "../components/ui/PaginationUI.vue";
import { api, store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    fetchProjects(endpoint = api.baseUrl + "projects") {
      axios.get(endpoint).then((response) => {
        store.projects = response.data.data;
        store.pagination = response.data.links;
        window.scrollTo(0, 0);
      });
    },
    fetchProjectsList(link) {
      store.fetchProjects(link);
    },
  },

  components: {
    ProjectCard,
    PaginationUI,
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row g-0">
      <div class="col-1"></div>
      <div class="col-8">
        <PaginationUI
          :pagination="store.pagination"
          @change-page="fetchProjectsList"
        ></PaginationUI>

        <ProjectCard
          v-for="project in store.projects"
          :project="project"
        ></ProjectCard>

        <PaginationUI
          :pagination="store.pagination"
          @change-page="fetchProjectsList"
        ></PaginationUI>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<style lang="scss"></style>
