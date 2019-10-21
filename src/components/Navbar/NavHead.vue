<template>
  <div id="fistNav" class="first-nav">
    <div class="navRow">
      <div class="logo">
        <img src="@/assets/logo-with20.svg" alt class="logoImg" />
        <div class="hero">
          <div class="txt">Culture Bridge</div>
        </div>
      </div>
      <div class="language">
        <select class="languageSelect" name="language" id="languageSelect">
          <option value>English</option>
          <option value>Traditional</option>
          <option value>Chinese</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavHead",
  components: {

  },
  data() {
    return {
      publicPath: process.env.BASE_URL
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
    .hero {
      display: flex;
      align-items: center;
      justify-content: center;
      .heroLogo {
        position: relative;
        max-width: 100%;
      }
      .txt {
          padding-left: 10px;
          font-size: 20px;
          color: #757575;
          text-shadow: transparent 0px 0px 0px, rgba(0,0,0,0.68) 0px 0px 0px !important;
      }
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
        }
    }
}
</style>