import Vue from 'vue'
import App from './App.vue'

// 引入router
import router from "./router";

Vue.config.productionTip = false

// 引入ui框架
import ElementUI from "element-ui";
// 使用样式
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
