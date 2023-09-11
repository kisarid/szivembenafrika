import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import VModal from 'vue-js-modal'
import i18n from './i18n'
import { CollapsePlugin } from 'bootstrap-vue'


Vue.config.productionTip = false

Vue.use(VModal)
Vue.use(CollapsePlugin)

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app")
