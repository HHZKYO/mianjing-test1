import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant)

import '@/utils/vant-ui'

// 组件的全局注册
import ArticleItem from '@/components/ArticleItem.vue'
Vue.component('ArticleItem', ArticleItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
