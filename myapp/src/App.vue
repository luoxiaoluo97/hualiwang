<template>
  <div class="container">
    <main>
      <router-view />
    </main>
    <el-col>
      <el-menu :defaule-active="activeIndex" mode="horizontal" router>
        <el-menu-item :index="item.path" v-for="item in menu" :key="item.id">
          <div class="xl">
            <i :class="item.icon"></i>
            <span slot="title">{{item.text}}</span>
          </div>
        </el-menu-item>
      </el-menu>
    </el-col>
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
          icon: "el-icon-house"
        },
        {
          id: 2,
          name: "classify",
          path: "/classify",
          text: "分类",
          icon: "el-icon-s-operation"
        },
        {
          id: 3,
          name: "phone",
          path: "/phone",
          text: "电话",
          icon: "el-icon-phone-outline"
        },
        {
          id: 4,
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon: "el-icon-shopping-cart-1"
        },
        {
          id: 5,
          name: "mine",
          path: "/mine",
          text: "我的",
          icon: "el-icon-s-custom"
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
