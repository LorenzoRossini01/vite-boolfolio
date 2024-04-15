<script>
import { store } from "../../store";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    pagination: Array,
  },

  emits: ["change-page"],
};
</script>

<template>
  <nav aria-label="..." class="mt-3">
    <ul class="pagination">
      <li
        class="page-item"
        :class="{ active: link.active, disabled: !link.url }"
        v-for="link in pagination"
        @click="$emit('change-page', link.url)"
      >
        <a class="page-link" v-html="link.label"></a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss"></style>
