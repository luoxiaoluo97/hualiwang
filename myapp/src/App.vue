<template>
  <div>
    <router-view />

    <van-tabbar route active-color="pink">
      <van-tabbar-item
        v-for="item in menu"
        :key="item.id"
        :to="item.path"
        :icon="item.icon"
        replace
      >{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
 
<script>
export default {
  name: "app",
  data() {
    return {
      //主菜单
      activeIndex: "home",
      menu: [
        {
          id: 1,
          name: "home",
          path: "/home",
          text: "首页",
          icon: "home-o"
        },
        {
          id: 2,
          name: "classify",
          path: "/classify",
          text: "分类",
          icon: "apps-o"
        },
        {
          id: 3,
          name: "phone",
          path: "/phone",
          text: "电话",
          icon: "phone-o"
        },
        {
          id: 4,
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon: "shopping-cart-o"
        },
        {
          id: 5,
          name: "mine",
          path: "/mine",
          text: "我的",
          icon: "manager-o"
        }
      ],
      //登录注册
      member: [
        {
          name: "login",
          path: "/login",
          text: "登录",
          icon: ""
        },
        {
          name: "reg",
          path: "/reg",
          text: "注册",
          icon: ""
        }
      ]
    };
  },
  methods: {
    goto(name) {
      this.$router.push({ name });
      // console.log(name)
    }
  },
  created() {
    console.log(this.$route);
    // this.activeIndex = this.$route.name;
  }
};
</script>

<style scoped>
.xl {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
}
</style>
