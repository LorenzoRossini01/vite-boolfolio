<script>
import { api, store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      project: null,
    };
  },

  methods: {
    fetchProjectDetail(project) {
      const projectSlug = this.$route.params.slug;
      axios.get(api.baseUrl + `projects/${projectSlug}`).then((response) => {
        // console.log(response.data);
        this.project = response.data;
      });
    },
  },

  created() {
    this.fetchProjectDetail(this.project);
  },
};
</script>

<template>
  <div class="container p-3 my-3 h-100">
    <div class="row g-3">
      <div class="col-12 col-lg-6">
        <div class="img-container">
          <img
            :src="
              project.imageUrl
                ? project.imageUrl
                : 'https://placehold.co/600x400'
            "
            class="card-img-top"
            alt="..."
          />
          <span
            class="badge"
            :style="'background-color:' + project.category.color"
            >{{ project.category.label }}
          </span>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <h1 class="text-uppercase h2">{{ project.title }}</h1>
        <div class="user-data">
          <img class="img-fluid profile-pic" :src="project.user.image" alt="" />
          <span class="username"> {{ project.user.name }} </span>
        </div>
        <div>
          <p class="card-text">
            {{ project.description }}
          </p>
        </div>
        <div class="project-tags">
          <ul>
            <li v-for="tag in project.tags" class="me-2">
              <a href="#">#{{ tag.label }}</a>
            </li>
          </ul>
        </div>
      </div>
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
.container {
  background-color: #2b3035;
  box-shadow: 0px 5px 10px -9px rgba(255, 255, 255, 0.648);

  .user-data {
    height: 25px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 1rem 0.25rem;
    margin-block: 1rem;
    border: 1px solid white;
    border-radius: 25px;
    width: fit-content;
    &:hover {
      background-color: #1d2024;
      cursor: pointer;
    }
    .profile-pic {
      aspect-ratio: 1;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      border: 2px solid red;
    }
    .username {
      margin-left: 1rem;
      padding-right: 1rem;
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
    cursor: pointer;
  }
}
</style>
