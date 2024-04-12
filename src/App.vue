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
  <AppHeader :title="title"></AppHeader>
  <AppMain :projects="store.projects"></AppMain>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
</style>
