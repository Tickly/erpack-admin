<template>
  <a-layout-sider class="app-sider">
    <div class="app-brand">
      <a href="/">
        <img src="@/assets/logo.png" />
        <span>Admin</span></a
      >
    </div>
    <app-side-menu />
  </a-layout-sider>
</template>
<script lang="ts">
import Vue from "vue";
import AppSideMenu from "./AppSideMenu";
export default Vue.extend({
  components: { AppSideMenu },
});
</script>
<style lang="less">
.app-sider {
  .ant-menu {
    color: #c2c2c2;
    background-color: transparent;
  }
}
.app-brand {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 1.6em;
    font-weight: bold;
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
}
</style>
