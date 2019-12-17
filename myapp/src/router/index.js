// 引入Vue
import Vue from "vue";
// 引入vue-Router 
import VueRouter from "vue-router";

// 使用vue-router 
Vue.use(VueRouter);


const Home = () => import("../pages/Home.vue");// 主页
const Reg = () => import("../pages/Reg.vue"); // 登录
const Login = () => import("../pages/Login.vue");// 登录
const Classify = () => import("../pages/Classify.vue"); // 分类
const Cart = () => import("../pages/Cart.vue");// 购物车
const Mine = () => import("../pages/Mine.vue");// 我的
const Phone = () => import("../pages/Phone.vue");//电话
const Notfound = () => import("../pages/Notfound.vue")  // 404页面

// 实例化VueRouter 并配置参数

const router = new VueRouter({
    routes: [
        {
            name: "home",
            path: "/home",
            component: Home
        }, {
            name: "reg",
            path: "/reg",
            component: Reg
        }, {
            name: "login",
            path: "/login",
            component: Login
        }, {
            name: "classify",
            path: "/classify",
            component: Classify
        }, {
            name: "cart",
            path: "/cart",
            component: Cart
        }, {
            name: "mine",
            path: "/mine",
            component: Mine
        }, {
            name: "phone",
            path: "/phone",
            component: Phone
        }, { // 路由重定向
            path: "/",
            redirect: "/home"
        }, {// 路径都不匹配的时候，跳转到404 页面
            path: "*",
            component: Notfound
        }
    ]
});

// 导出router 实例  ，并把router实例注入到Vue的实例当中
export default router;