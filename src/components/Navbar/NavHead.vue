<template>
  <div id="fistNav" class="first-nav">
    <div class="navRow">
      <div class="logo">
        <img src="@/assets/logo-with20.svg" alt class="logoImg" />
      </div>
      <div class="hero">
        <div class="txt">{{$t('title')}}</div>
      </div>
      <div class="language">
        <select class="languageSelect" name="language" id="languageSelect" v-model="$i18n.locale">
          <option v-for="(l,index) in langs" :key="index" v-bind:value="l.v">{{l.n}}</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavHead",
  components: {},
  data() {
    return {
      publicPath: process.env.BASE_URL,
      langs: [
        { n: "English", v: "en" },
        { n: "Traditional Chinese", v: "td" },
        { n: "Simple Chinese", v: "cn" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
$navHeight: 64px;
#fistNav {
  width: 100%;
  display: block;
  height: $navHeight;
  box-shadow: 0 2px 8px #f0f1f2;
  border-bottom: 1px solid #e8e8e8;
  .navRow {
    height: 100%;
    display: flex;
    width: 100%;
    max-width: 1200px;
    min-width: 500px;
    margin: 0 auto;
    display: -webkit-flex; /* Safari */
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
  .logo {
    position: relative;
    height: $navHeight;
    box-sizing: border-box;
    display: flex;
    img {
      position: relative;
      width: 120px;
      top: 50%;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    .heroLogo {
      position: relative;
      max-width: 100%;
    }
    .txt {
      font-size: 20px;
      color: #121212;
      text-shadow: transparent 0px 0px 0px, rgba(0, 0, 0, 0.68) 0px 0px 0px !important;
    }
  }
  .language {
    display: flex;
    align-items: center;
    .languageSelect {
      font-size: 13px;
      border-radius: 0;
      border: none;
      outline: 0px;
      background: transparent;
    }
  }
}
</style>