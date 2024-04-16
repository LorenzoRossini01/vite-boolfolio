<script>
import UserProjectList from "../components/UserProjectList.vue";
import { api, store } from "../store";
import axios from "axios";

export default {
  data() {
    return { store, projects: [] };
  },

  computed: {
    userId() {
      return this.$route.params.user_id;
    },

    apiEndpoint() {
      return api.baseUrl + `user/${this.userId}`;
    },
  },

  components: {
    UserProjectList,
  },

  methods: {
    fetchUser(endpoint = this.apiEndpoint) {
      axios.get(endpoint).then((response) => {
        // console.log(response.data.data);
        this.projects = response.data.data;
        // store.pagination = response.data.links;
        window.scrollTo(0, 0);
      });
    },
  },

  created() {
    this.fetchUser();
  },
};
</script>

<template>
  <div class="container py-3">
    <div class="bio-section d-flex align-items-center pb-3">
      <div class="pro-pic-cont">
        <img
          class="img-fluid profile-pic"
          :src="projects[0].user.image"
          alt=""
        />
      </div>
      <div class="ps-3">
        <h1 class="username">{{ projects[0].user.name }}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          deserunt.
        </p>
      </div>
    </div>
    <UserProjectList :projects="projects" :key="userId"></UserProjectList>
  </div>
</template>

<style lang="scss" scoped>
.bio-section {
  border-bottom: 1px solid white;
  .profile-pic {
    aspect-ratio: 1;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 2px solid red;
  }
  .username {
    text-transform: capitalize;
  }
}
</style>
