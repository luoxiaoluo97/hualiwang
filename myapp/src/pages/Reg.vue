<template>
  <div>
    <div class="rui-head" id="rui_header">
      <div class="rui-head-ret">
        <span class="c-main"></span>
      </div>
      <div class="rui-head-text">注册</div>

      <div class="rui-head-menu">
        <span class="c-main2">...</span>
      </div>
    </div>

    <div id="app" class="rui-login">
      <div class="rui-login-logo">
        <img src="https://huaduocai.oss-cn-qingdao.aliyuncs.com/hdc_pc_images/logo.jpg" />
      </div>
      <div class="rui-login-from">
        <input type="text" placeholder="注册手机号" class="rui-login-input" />
      </div>
      <!---->
      <div class="rui-login-from">
        <input type="text" placeholder="请输入收到的验证码" class="rui-login-input" />
        <div class="rui-login-label">获取验证码</div>
      </div>
      <div class="rui-login-from">
        <input type="password" placeholder="设置新密码" class="rui-login-input rui-login-input2" />
      </div>
      <div class="rui-login-btn">注册</div>
      <div class="rui-login-other">
        <a href>已有账号!去登录</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}

* {
  margin: 0;
  padding: 0;
}

body,
button,
input,
select,
textarea {
  color: #333;
}

.rui-head {
  width: vw(375);
  height: vw(46);
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: vw(1) solid #f2f2f2;
  position: relative;
}

.rui-head-ret {
  width: vw(45);
  height: vw(45);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

//左边箭头
.c-main {
  position: absolute;
  top: vw(-35);
  left: vw(-80);
  display: inline-block;
  border-top: vw(2) solid;
  border-right: vw(2) solid;
  width: vw(12);
  height: vw(12);
  border-color: #333;
  transform: rotate(-135deg);
  margin: vw(50) auto auto vw(100);
}

//注册
.rui-head .rui-head-text {
  position: absolute;
  left: vw(170);
  font-size: vw(16);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.rui-head-menu {
  width: vw(45);
  height: vw(45);
}
.c-main2 {
  display: inline-block;
  width: vw(24);
  height: vw(24);
  font-size: vw(20);
  font-weight: bold;
  position: absolute;
  right: vw(10);
  top: vw(5);
  // line-height: vw(24);
  // vertical-align: middle;
  // align-self: center;
}

.rui-login {
  padding: 0 20px;
}
.rui-login .rui-login-logo {
  margin-top: 34px;
  text-align: center;
}
.rui-login .rui-login-logo img {
  width: 80px;
  height: 80px;
  padding: 15px;
  border: 2px solid #f46;
  border-radius: 6px;
}

// 注册手机号
.rui-login .rui-login-from {
  width: vw(335);
  height: vw(34);
  display: flex;
  margin-top: vw(10);
  padding: vw(6) 0;
  border-bottom: vw(1) solid #efefef;
}
.rui-login-input {
  font-size: vw(14);
}

input,
select,
textarea {
  width: vw(335);
  height: vw(34);
  border: vw(0);
}
.rui-login .rui-login-from .rui-login-label {
  width: vw(80);
  height: vw(34);
  line-height: vw(34);
  text-align: center;
  border-left: vw(1) solid #efefef;
  color: #222;
  font-size: vw(12);
}

.rui-login .rui-login-btn {
  height: vw(48);
  text-align: center;
  line-height: vw(48);
  background: linear-gradient(to right, #f45, #f46);
  border-radius: vw(48);
  color: #fff;
  margin-top: vw(30);
  box-shadow: 0 vw(1) vw(3) #f44;
}

.rui-login-other {
  display: flex;
  justify-content: space-between;
  margin-top: vw(20);
  font-size: vw(14);
}

.rui-login-other a {
  color: #999;
}
</style>