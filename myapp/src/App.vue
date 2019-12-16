<template>
  <div>
    <router-view />
    <el-menu
      mode="horizontal"
      class="el-menu-vertical-demo"
      :defaule-active="activeIndex"
      @select="goto"
    >
      <el-menu-item :index="item.name" v-for="item in menu" :key="item.name">
        <div class="xl">
          <i :class="item.icon"></i>
          <span slot="title">{{item.text}}</span>
        </div>
      </el-menu-item>
    </el-menu>
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

// <ul>
//       <li v-for="item in menu" :key="item.name">
//         <!-- exact-active-class 精确匹配到路由 -->
//         <router-link :to="item.path" exact-active-class="active">{{item.text}}</router-link>
//       </li>
//     </ul>

// <div id="app">
//     <router-view />
//     <el-menu
//       default-active="2"
//       class="el-menu-vertical-demo"
//       @open="handleOpen"
//       @close="handleClose"
//     >
//       <el-menu-item index="1">
//         <i class="el-icon-menu"></i>
//         <span slot="title">导航一</span>
//       </el-menu-item>

//       <el-menu-item index="2">
//         <i class="el-icon-menu"></i>
//         <span slot="title">导航二</span>
//       </el-menu-item>
//       <el-menu-item index="3">
//         <i class="el-icon-document"></i>
//         <span slot="title">导航三</span>
//       </el-menu-item>
//       <el-menu-item index="4">
//         <i class="el-icon-setting"></i>
//         <span slot="title">导航四</span>
//       </el-menu-item>
//     </el-menu>
// </div>
</script>

<style scoped>
.xl {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
}
</style>
