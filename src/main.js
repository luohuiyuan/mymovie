import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'
import vueLazyLoad from 'vue-lazyload'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.use(vueLazyLoad,{
  preLoad:0.5,
  loading:require('./assets/images/lazyload.jpg')
})
Vue.config.productionTip = false
// 将axios方法挂载到vue原型上，后续所有的vue实列都可以直接this.axios使用
// let request = axios.create({
//   baseURL:'http://api.douban.com/v2'
// })
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
