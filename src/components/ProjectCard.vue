<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="card mt-4">
    <img :src="project.imageUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        {{ project.description }}
      </p>
      <a href="#" class="btn btn-primary">see more</a>
    </div>
  </div>
</template>

<style lang="scss"></style>
