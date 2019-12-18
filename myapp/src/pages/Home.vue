<template>
  <div id="home">
    <!-- 搜索框 -->
    <div class="search">
      <div class="hdc-head-logo">
        <img
          src="https://huaduocai.oss-cn-qingdao.aliyuncs.com/hdc_pc_images/logo.png"
          class="logo-images"
        />
      </div>
      <van-search
        style="width:300px;height:31px"
        v-model="value"
        placeholder="搜索鲜花，永生花，礼品"
        shape="round"
        @search="onSearch"
      ></van-search>
      <span class="login" @click="login" color="red">登录</span>
    </div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" :height="214">
      <van-swipe-item id="hu" v-for="(image, index) in images" :key="index">
        <img v-lazy="image" :height="214" />
      </van-swipe-item>
    </van-swipe>

    <!-- 一级分类 -->
    <van-grid :column-num="4" :border="false">
      <van-grid-item
        v-for="item in datas"
        :key="item.id"
        :text="item.text"
        @click="classify(item.id)"
      >
        <van-image :src="item.src" />
      </van-grid-item>
    </van-grid>
    <div class="tag">
      <span>人气首推</span>
    </div>

    <div class="list">
      <!-- 渲染页面 -->
      <div class="list_1">
        <div class="list_2">
          <img src="https://cdn.huaduocai.net/Storage/Shop/1/Products/7049/40120926086255.jpg" alt />
          <dl>
            <dt>最好的给你</dt>
            <dt>￥159.00</dt>
          </dl>
        </div>
      </div>
    </div>

    <div class="send"> 
      <!-- 标题 -->
      <div class="send_1">
        <span class="span_1">送花对象</span>
        <span class="span_2">更多》</span>
      </div>
      <!-- 送花对象 -->
      <div class="send_2">
        <div class="list_2">
          <!-- <img src="http://cdn.huaduocai.net/Storage/Shop/1/logo/9602835526844902.jpg" alt /> -->
          <dl>
            <dt>送恋人</dt>
          </dl>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [require("../image/01.jpg"), require("../image/02.jpg")],
      datas: [
        {
          id: 1,
          src:
            "https://huaduocai.oss-cn-qingdao.aliyuncs.com/hdc_pc_images/quanbuxianhua.jpg",
          text: "全部鲜花"
        },
        {
          id: 2,
          src: "https://cdn.huaduocai.net/Storage/Shop/1/Tag/5/1.png",
          text: "花篮"
        },
        {
          id: 3,
          src: "https://cdn.huaduocai.net/Storage/Shop/1/Tag/6/1.png",
          text: "绿植"
        },
        {
          id: 4,
          src:
            "https://cdn.huaduocai.net/Storage/Shop/1/Tag/4/132528326006220673.jpg",
          text: "永生花"
        }
      ],
      list_1: []
    };
  },
  methods: {
    onSearch() {
      window.console.log(111);
    },
    classify(val) {
      window.console.log(val);
    }
  }
};
</script>

<style scoped lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
#home {
  width: vw(375);
  background: #f2f2f2;

  .search {
    width: vw(375);
    height: vw(44);
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
    .login {
      color: red;
      font-size: vw(16);
      font-weight: bold;
    }
  }
  #hu {
    img {
      width: vw(375);
      height: vw(223);
    }
  }
  .hdc-head-logo {
    img {
      width: vw(28);
      height: vw(28);
      //
    }
  }
  .tag {
    width: vw(375);
    height: vw(20);
    background: #ffffff;
    span {
      display: block;
      width: vw(64);
      height: vw(20);
      line-height: vw(20);
      text-align: center;
      background: red;
      color: #fff;
      font-weight: bold;
      font-size: vw(12);
      margin-left: vw(11);
    }
  }
  .list {
    width: vw(375);
    height: vw(125);
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    .list_1 {
      width: vw(347);
      height: vw(125);
      // border: 1px solid red;
      .list_2 {
        display: inline-block;
        width: vw(115);
        height: vw(115);
        // border: 1px solid red;
        position: relative;
        img {
          width: vw(115);
          height: vw(115);
        }
        dl {
          width: vw(115);
          height: vw(48);
          // border: 1px solid red;
          position: absolute;
          bottom: vw(-16);
          background: rgba($color: #000000, $alpha: 0.3);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          dt {
            font-size: vw(14);
            color: #fff;
          }
        }
      }
    }
  }
  .send_ {
    width: vw(375);
      height: vw(170);
       border: 1px solid red;
    .send_1{
      width: vw(375);
      height: vw(38);
      border: 1px solid red;
    }
  }
}
</style>