<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      project: null,
    };
  },

  props: {
    projects: Array,
    pagination: Array,
  },

  created() {
    store.fetchProjectDetail(this.project);
  },
};
</script>

<template>
  <h1>Dettagli progetto</h1>
</template>

<style lang="scss" scoped></style>
