<script>
export default {
  props: {
    project: Object,
  },

  computed: {
    abstract() {
      return this.project.description.length > 25
        ? this.project.description.substr(0, 25) + "..."
        : this.project.description;
    },
  },
};
</script>

<template>
  <div class="card mt-4" :class="this.$route.params.user_id ? 'h-100' : ''">
    <div class="card-header" v-if="!this.$route.params.user_id">
      <router-link
        :to="{ name: 'user.show', params: { user_id: project.user_id } }"
      >
        <img class="img-fluid profile-pic" :src="project.user.image" alt="" />
        <span class="username"> {{ project.user.name }} </span>
      </router-link>
    </div>
    <div class="img-container">
      <router-link
        :to="{ name: 'projects.show', params: { slug: project.slug } }"
      >
        <img
          :src="
            project.imageUrl ? project.imageUrl : 'https://placehold.co/600x400'
          "
          class="card-img-top"
          alt="..."
        />
      </router-link>
      <router-link
        :to="{
          name: 'projects.filter-by-caregory',
          params: { category_id: project.category_id },
        }"
        class="badge"
        :style="'background-color:' + project.category.color"
        >{{ project.category.label }}
      </router-link>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        {{ project.title }}
      </h5>
      <p class="card-text">
        {{ abstract }}
      </p>
      <!-- <a href="#" class="btn btn-primary">see more</a> -->
    </div>

    <div class="card-footer">
      <ul>
        <li v-for="tag in project.tags" class="me-2">
          <router-link
            :to="{
              name: 'projects.filter-by-tag',
              params: { tag_id: tag.id },
            }"
            >#{{ tag.label }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  li {
    display: inline-block;
  }
}
.card {
  border-radius: 0;
  border: 1px solid rgba(0, 0, 0, 0.037);
  box-shadow: 0px 5px 10px -9px rgba(255, 255, 255, 0.648);

  .card-header {
    height: 100px;
    display: flex;
    justify-content: start;
    align-items: center;
    .profile-pic {
      aspect-ratio: 1;
      height: 75px;
      width: 75px;
      border-radius: 50%;
      border: 2px solid red;
    }
    .username {
      margin-left: 1.5rem;
      text-transform: capitalize;
    }
  }

  .img-container {
    position: relative;
    height: 500px;
    background-color: rgba(177, 177, 177, 0.626);
  }
  img {
    border-radius: 0;
    object-fit: cover;
    object-position: center;
    height: 500px;
    width: 100%;
  }

  .badge {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    font-size: 1rem;
  }
}
</style>
