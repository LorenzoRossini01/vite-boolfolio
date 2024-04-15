<script>
import axios from "axios";
import { api, store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
  data() {
    return {
      store,
      title: "Boolfolio",
    };
  },

  components: {
    AppHeader,
    ProjectList,
  },

  methods: {},

  created() {
    store.fetchProjects();
  },
};
</script>

<template>
  <AppHeader :title="title"></AppHeader>

  <router-view
    :projects="store.projects"
    :pagination="store.pagination"
  ></router-view>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
</style>
