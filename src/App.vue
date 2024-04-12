<script>
import axios from "axios";
import { api, store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
      title: "Boolfolio",
    };
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {},

  created() {
    store.fetchProjects();
  },
};
</script>

<template>
  <AppHeader :title="title"></AppHeader>
  <AppMain :projects="store.projects" :pagination="store.pagination"></AppMain>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
</style>
