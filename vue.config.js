module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/common/style/media.scss";`
        }
      }
    }
  };