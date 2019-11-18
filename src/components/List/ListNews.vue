<template>
  <div class="list-container">
    <div class="cover">
      <img :src="news.smCover" alt />
    </div>
    <div class="title">{{news.title}}</div>
  </div>
</template>
<script>
export default {
  name: "ListNews",
  props: {
    news: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.list-container {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  flex: 1;
  overflow: hidden;
  .cover {
    flex-basis: 0;
    flex-grow: 1;
    padding: 0 20px;
    img {
      width: 100%;
      max-width: 285px;
      max-height: 230px;
      margin: 0 auto;
    }
  }
  .title {
    box-sizing: border-box;
    text-align: left;
    vertical-align: top;
    padding-top: 20px;
    padding-left: 20px;
    flex-basis: 0;
    flex-grow: 1.618;
  }
}
</style>