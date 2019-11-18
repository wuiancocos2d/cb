<template>
  <div class="list">
    <div class="divider">
      <a-divider class="dtxt">{{$t('latest')}}</a-divider>
      <list-news v-for="(news,index) in newsList " :key="index" :news="news"></list-news>
      <a-pagination :defaultCurrent="defaultCurrent" :total="total"></a-pagination>
    </div>
  </div>
</template>
<script>
import { Divider, Pagination } from "ant-design-vue"
import ListNews from './ListNews.vue'
export default {
  name: "List",
  components: {
    "a-divider": Divider,
    "a-pagination": Pagination,
    ListNews
  },
  props: {
      newsList: {
          type: Array,
          required: true
      },
      total: {
          type: Number,
          required: true
      },
      defaultCurrent: {
          type: Number,
          default: 1
      }
  }
};
</script>
<style lang="scss" scoped>
.list {
    min-width: 375px;
    width: 100%;
     max-width: 960px;
    margin: 0 auto;
  .divider {
    .dtxt {
      font-size: 26px;
    }
    @include sm {
      padding: 10px 5px 0;
    }
    @include md {
      padding: 10px 5px 0;
    }
    @include lg {
      margin: 20px 0 0;
      padding: 28px 0 24px;
      font-size: 30px;
    }
  }
}
</style>