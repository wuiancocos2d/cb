<template>
  <div class="carouselHero">
    <a-carousel :autoplay="true">
      <NewsHero v-for="(hero, index) in heros" :key="index" :hero="hero"></NewsHero>
    </a-carousel>
  </div>
</template>
<script>
import { Carousel } from "ant-design-vue";
import NewsHero from "./NewsHero";
export default {
  name: "CarouselHero",
  components: {
    "a-carousel": Carousel,
    NewsHero
  },
  props: {
    heros: {
      type: Array
    }
  }
};
</script>
<style lang="scss" scoped>
.carouselHero {
    padding: 5px 2px 0;
    @include sm {
        padding: 10px 5px 0;
    }
     @include md {
        padding: 10px 5px 0;
    }  
        @include  lg {
        padding: 30px 20px 0;
    }
    overflow: hidden;
}
</style>