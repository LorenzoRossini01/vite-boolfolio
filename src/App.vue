<script>
import axios from "axios";
import { api, store } from "./store";

export default {
  data() {
    return {
      store,
      title: "Boolfolio",
    };
  },

  methods: {
    fetchProjects(endpoint = api.baseUrl + "projects") {
      axios.get(endpoint).then((response) => {
        store.projects = response.data.data;
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
  <div v-for="project in store.projects">
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
