<template>
  <div class="newsHero">
    <div class="container">
      <div class="heroCover">
        <img :src="hero.cover" alt />
      </div>
      <div class="heroTxt">
        <div class="title">{{hero.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsHero",
  props: {
    hero: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
.newsHero {
  .container {
    height: 415px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
    .heroCover {
        flex-basis: 0;
      flex-grow: 6;
      height: 100%;
      @media screen  and (min-width: 768px){
          min-width: 580px;
      }
      img {
        width: 100%;
        height: 100%;
        max-width: 596px;
        margin: 0 auto;
      }
    }
    .heroTxt {
        flex-basis: 0;
      flex-grow: 4;
      .title {
        text-align: left;
        @media screen and (min-width: 768px) {
          font-size: 40px;
          margin: 0 0 0 30px;
        }
      }
    }
  }
}
</style>