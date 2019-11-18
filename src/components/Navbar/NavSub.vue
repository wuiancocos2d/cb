<template>
  <div class="navSub">
    <a-menu mode="horizontal">
      <a-menu-item v-for="(nav,index) in navs" :key="index">{{nav.title}}</a-menu-item>
    </a-menu>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Menu } from "ant-design-vue";
export default Vue.extend({
  name: "NavSub",
  components: {
    "a-menu": Menu,
    "a-menu-item": Menu.Item
  },
  data() {
    return {};
  },
  computed: {
    navs: function() {
      return [
        {
          title: this.$t("navTilte.spotlight"),
          link: "/25th"
        },
        {
          title: this.$t("navTilte.newsletters"),
          link: "/25th"
        },
        {
          title: this.$t("navTilte.anniversary"),
          link: "/25th"
        }
      ];
    }
  }
});
</script>
<style lang="scss" scoped>
</style>