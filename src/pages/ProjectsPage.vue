<script>
import ProjectCard from "../components/ProjectCard.vue";
import PaginationUI from "../components/ui/PaginationUI.vue";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    projects: Array,
    pagination: Array,
  },

  components: {
    ProjectCard,
    PaginationUI,
  },

  methods: {
    fetchProjectsList(link) {
      store.fetchProjects(link);
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row g-0">
      <div class="col-1"></div>
      <div class="col-8">
        <PaginationUI
          :pagination="pagination"
          @change-page="fetchProjectsList"
        ></PaginationUI>

        <ProjectCard
          v-for="project in projects"
          :project="project"
        ></ProjectCard>

        <PaginationUI
          :pagination="pagination"
          @change-page="fetchProjectsList"
        ></PaginationUI>

        <!-- <nav aria-label="..." class="mt-3">
          <ul class="pagination">
            <li
              class="page-item"
              :class="{ active: link.active, disabled: !link.url }"
              v-for="link in pagination"
              @click="store.fetchProjects(link.url)"
            >
              <a class="page-link" v-html="link.label"></a>
            </li>
          </ul>
        </nav> -->
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<style lang="scss"></style>
