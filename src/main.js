import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import lang from './common/lang/index'
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(VueI18n)

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages:lang, // set locale messages
})


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
