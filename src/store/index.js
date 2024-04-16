import { reactive } from "vue";
import axios from "axios";

export const api = {
  baseUrl: "http://127.0.0.1:8000/api/",
};

export const store = reactive({
  projects: [],
  pagination: [],

  // fetchProjects(endpoint = api.baseUrl + "projects") {
  //   axios.get(endpoint).then((response) => {
  //     this.projects = response.data.data;
  //     this.pagination = response.data.links;
  //     window.scrollTo(0, 0);
  //   });
  // },

  //   fetchProjectDetail(project) {
  //     // #todo sistemare errore
  //     const projectSlug = this.$route.params.slug;
  //     axios.get(api.baseUrl + `projects/${projectSlug}`).then((response) => {
  //       console.log(response.data);
  //       project = response.data;
  //     });
  //   },
});
