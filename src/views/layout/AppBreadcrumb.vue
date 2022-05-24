<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="item in list" :key="item.title">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script lang="ts">
import Vue from "vue";

interface breadcrumb {
  title: string;
  path: string;
}

export default Vue.extend({
  name: "AppBreadcrumb",
  data() {
    return {
      list: [] as breadcrumb[],
    };
  },
  mounted() {
    this.parseBreadcrumbs();
  },
  methods: {
    parseBreadcrumbs() {
      const list: breadcrumb[] = [];
      this.$route.matched.forEach((route) => {
        const {
          path,
          meta: { title },
        } = route;

        if (title) {
          list.push({
            title,
            path,
          });
        }
      });

      this.list = list;
    },
  },
});
</script>
