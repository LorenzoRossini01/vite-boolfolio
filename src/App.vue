<script>
import axios from "axios";
import { api, store } from "./store";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      store,
      title: "Boolfolio",
    };
  },

  components: {
    AppHeader,
  },

  methods: {},
};
</script>

<template>
  <AppHeader :title="title"></AppHeader>

  <router-view></router-view>
</template>

<style lang="scss">
@use "/src/scss/general.scss";

a {
  text-decoration: none;
}
</style>
