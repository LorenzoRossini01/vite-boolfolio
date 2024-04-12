<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Boolfolio",
      projects: [],
    };
  },

  methods: {
    fetchProjects(endpoint = "http://127.0.0.1:8000/api/projects") {
      axios.get(endpoint).then((response) => {
        this.projects = response.data.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <div v-for="project in projects">
    <ul>
      <li><strong>title: </strong>{{ project.title }}</li>
      <li><strong>description: </strong>{{ project.description }}</li>
      <li><strong>link: </strong>{{ project.link }}</li>
      <li><strong>img: </strong>{{ project.imageUrl }}</li>
    </ul>
    <hr />
  </div>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
</style>
