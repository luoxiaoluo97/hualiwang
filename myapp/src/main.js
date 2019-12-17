import Vue from 'vue'
import App from './App.vue'

// 引入router
import router from "./router";

Vue.config.productionTip = false

// 引入vant ui 框架
import Vant from 'vant';
// 使用vant css 样式
import 'vant/lib/index.css'

import { Lazyload,Grid, GridItem ,Tag} from 'vant';
Vue.use(Lazyload).use(Grid).use(GridItem).use(Tag)

Vue.use(Vant)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
