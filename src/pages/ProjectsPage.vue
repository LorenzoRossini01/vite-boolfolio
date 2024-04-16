<script>
import ProjectList from "../components/ProjectList.vue";

export default {
  data() {
    return {};
  },

  computed: {
    category_id() {
      return this.$route.params.category_id
        ? parseInt(this.$route.params.category_id)
        : false;
    },
  },

  components: {
    ProjectList,
  },
};
</script>

<template>
  <ProjectList :category_id="category_id" :key="category_id"></ProjectList>
</template>

<style lang="scss" scoped></style>
