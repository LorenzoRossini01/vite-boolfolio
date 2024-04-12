<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
  props: {
    projects: Array,
  },

  components: {
    ProjectCard,
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row g-0">
      <div class="col-1"></div>
      <div class="col-8">
        <ProjectCard
          v-for="project in projects"
          :project="project"
        ></ProjectCard>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<style lang="scss"></style>
