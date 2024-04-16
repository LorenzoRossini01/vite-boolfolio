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

  computed: {
    apiEndpoint() {
      if (!this.$route.params.category_id) {
        return api.baseUrl + "projects";
      } else {
        const projectCategoryId = this.$route.params.category_id;

        return api.baseUrl + `category/${projectCategoryId}`;
      }
    },
  },

  methods: {
    fetchProjects(endpoint = this.apiEndpoint) {
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

  props: {
    category_id: [Number, Boolean],
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
  <div class="container-fluid" :key="category_id">
    <div class="row g-0">
      <div class="col-1"></div>
      <div class="col-8">
        <PaginationUI
          :pagination="store.pagination"
          @change-page="fetchProjects(store.pagination.url)"
        ></PaginationUI>

        <ProjectCard
          v-for="project in store.projects"
          :project="project"
          :key="project.id"
        ></ProjectCard>

        <PaginationUI
          :pagination="store.pagination"
          @change-page="fetchProjects(store.pagination.url)"
        ></PaginationUI>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<style lang="scss"></style>
