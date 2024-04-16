<script>
import ProjectCard from "../components/ProjectCard.vue";
import { api, store } from "../store";
import axios from "axios";

export default {
  data() {
    return { store, projects: [] };
  },

  computed: {
    apiEndpoint() {
      const userId = this.$route.params.user_id;
      return api.baseUrl + `user/${userId}`;
    },
  },

  props: {
    projects: Array,
  },

  components: {
    ProjectCard,
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-3 g-3">
      <div class="col" v-for="project in projects">
        <ProjectCard :project="project" :key="project.id"></ProjectCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
