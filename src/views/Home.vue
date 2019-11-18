<template>
  <div class="home">
    <CarouselHero v-bind:heros="heros"></CarouselHero>
    <List :newsList="list" :total="total"></List>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CarouselHero from "../components/CarouselHero/CarouselHero.vue";
import List from "../components/List/List.vue";
export default Vue.extend({
  name: "home",
  components: {
    CarouselHero,
    List
  },
  data() {
    return {
      heros: [
        {
          cover:
            "https://theweeflea.com/wp-content/uploads/2019/10/Screenshot-2019-10-08-18.33.17.png",
          title: "On “Human Scum” and Trump in the Danger Zone"
        },
        {
          cover:
            "https://www.itsnicethat.com/system/files/052018/5b0d3a167fa44cfa09000200/images_slice_large/four-three-boiler-room-film-itsnicethat-1.jpg?1527593852",
          title:
            "The Importance of Cigarette Receipts in a Thirty-Two-Year-Old Murder Case"
        }
      ],
      list: [
        {
          cover:
            "https://i.pinimg.com/564x/dc/18/56/dc1856fbef093e26f4ffb2d5d799aa5e.jpg",
          smCover:
            "https://i.pinimg.com/564x/dc/18/56/dc1856fbef093e26f4ffb2d5d799aa5e.jpg",
          title: "Franco’s Body Is Exhumed, as Spain Struggles to Confront the Past"
        },
        {
          cover:
            "https://i.pinimg.com/564x/e7/37/0e/e7370eaff94c0a65de9cc991a1b23d3c.jpg",
          smCover:
            "https://i.pinimg.com/564x/e7/37/0e/e7370eaff94c0a65de9cc991a1b23d3c.jpg",
          title: "Volodymyption. The."
        }
      ],
      total: 50
    };
  }
});
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>

