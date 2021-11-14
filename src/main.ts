import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import VModal from 'vue-js-modal'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(VModal)

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app")
