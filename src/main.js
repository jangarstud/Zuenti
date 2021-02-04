import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResizeText from 'vue-resize-text'
import VueRouter from 'vue-router'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import ImageUploader from 'vue-image-upload-resize'

Vue.use(ImageUploader)

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueResizeText)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
