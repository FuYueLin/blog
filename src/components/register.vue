
<template>
<div class="login_container">
 <body oncontextmenu="return false" style=" background:transparent;">
  <div class="page-container">
    <h1>Register</h1>
    <form action method="post">
      <div>
        <input
          type="text"
          name="username"
          class="username"
          placeholder="useremail"
          v-model="useremail"
          autocomplete="off"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          class="password"
          placeholder="Password"
          v-model="userpwd"
          oncontextmenu="return false"
          onpaste="return false"
        />
      </div>
      <button id="submit" type="button" @click=" handlclick">Sign in</button>
    </form>
    <div class="connect">
      <p>If we can only encounter each other rather than stay with each other,then I wish we had never encountered.</p>
      <p style="margin-top:20px;">如果只是遇见，不能停留，不如不遇见。</p>
    </div>
  </div>
  </body>
  <router-view />
</div>
</template>

<script>
import Axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      useremail: "",
      userpwd: ""
    };
  },
  mounted() {
    window.onload = function() {
      $(".connect p")
        .eq(0)
        .animate({ left: "0" }, 600);
      $(".connect p")
        .eq(1)
        .animate({ left: "0" }, 400);
      $(".alert").animate({ top: "-40%" }, 300);
      $(".alert")
        .show()
        .animate({ top: "45%" }, 300);
    };
  },
  methods: {
    handlclick() {
      var useremail = this.useremail;
      var userpwd = this.userpwd;
      if (useremail == "") {
        alert("邮箱不能为空");
      } else {
        if (!useremail == "") {
          var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if (!reg.test(useremail)) {
            alert("输入有效邮箱");
          }
          if (userpwd == "") {
            alert("密码不能为空");
          } else if (userpwd.length < 6) {
            alert("密码长度最小6位");
          } else {
            Axios.post(
              "/zhuce",
              qs.stringify({
                useremail: this.useremail,
                userpwd: this.userpwd
              })
            ).then(response => {
              console.log(response.data);
              var user = response.data;
              if (user == 0) {
                alert("邮箱已存在请更换邮箱");
              } else if (user == 2) {
                alert("格式不正确");
              } else if (user == 1) {
                alert("注册成功已将跳转到登入页面");
                this.$router.push("/Login");
              }
            });
          }
        }
      }
    }
  }
};
</script>

<style scoped>
/* @import "../assets/css/style.css"; */

body {
  background: #f8f8f8;
  /*font-family: 'PT Sans', Helvetica, Arial, sans-serif;*/
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti, MingLiu;
  text-align: center;
  color: #fff;
}

.page-container {
  margin: 120px auto 0 auto;
}

h1 {
  font-size: 30px;
  font-weight: 700;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
}

form {
  position: relative;
  width: 305px;
  margin: 15px auto 0 auto;
  text-align: center;
}

input {
  width: 270px;
  height: 42px;
  line-height: 42px;
  margin-top: 25px;
  padding: 0 15px;
  background: #2d2d2d; /* browsers that don't support rgba */
  *background-color: transparent;
  background: rgba(45, 45, 45, 0.15);
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #3d3d3d; /* browsers that don't support rgba */
  border: 1px solid rgba(255, 255, 255, 0.15);
  -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -o-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -ms-transition: all 0.2s;
}

input:-moz-placeholder {
  color: #fff;
}
input:-ms-input-placeholder {
  color: #fff;
}
input::-webkit-input-placeholder {
  color: #fff;
}

input:focus {
  outline: none;
  -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
}

button {
  cursor: pointer;
  width: 300px;
  height: 44px;
  margin-top: 25px;
  padding: 0;
  background: #ef4300;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 0px;
  -moz-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.25) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.25) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.25) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -o-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -ms-transition: all 0.2s;
}

button:hover {
  -moz-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
}

button:active {
  -moz-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1) inset,
    0 1px 4px 0 rgba(0, 0, 0, 0.1);

  border: 0px solid #ef4300;
}

.connect {
  width: 800px;
  margin: 50px auto 0 auto;
  font-size: 14px;

  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.connect p {
  position: relative;
   left: -170%;
  top: 0;
}
.connect a {
  display: inline-block;
  width: 32px;
  height: 35px;
  margin-top: 15px;
  -o-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -ms-transition: all 0.2s;
}
.alert {
  width: 310px;
  height: 200px;
  background: #000;
  position: absolute;
  top: -40%;
  left: 50%;
  margin: -101px 0 0 -151px;
}
.alert h2 {
  height: 40px;
  padding-left: 8px;
  font-size: 14px;
  background: #ff0543;
  text-align: left;
  line-height: 40px;
}
.alert .alert_con {
  background: #fff;
  height: 160px;
}
.alert .alert_con p {
  color: #000;
  line-height: 90px;
}
.alert .alert_con .btn {
  padding: 3px 10px;
  color: #fff;
  cursor: pointer;
  background: #72d1ff;
  border: 1px solid #72d1ff;
  border-radius: 4px;
}
.alert .alert_con .btn:hover {
  background: #4fb2ef;
  border: 1px solid #4fb2ef;
  border-radius: 4px;
}

* {
  margin: 0;
  padding: 0;
}
body {
  background: #111;
  height: 100%;
}
img {
  border: none;
}

#supersized-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  text-indent: -999em;
  background: no-repeat center center;
}

#supersized {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -999;
  height: 100%;
  width: 100%;
}
#supersized img {
  width: auto;
  height: auto;
  position: relative;
  display: none;
  outline: none;
  border: none;
}
#supersized.speed img {
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -moz-crisp-edges;
} /*Speed*/
#supersized.quality img {
  -ms-interpolation-mode: bicubic;
  image-rendering: optimizeQuality;
} /*Quality*/

#supersized li {
  display: block;
  list-style: none;
  z-index: -30;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111;
}
#supersized a {
  width: 100%;
  height: 100%;
  display: block;
}
#supersized li.prevslide {
  z-index: -20;
}
#supersized li.activeslide {
  z-index: -10;
}
/* #supersized li.image-loading { background:#111  no-repeat center center; width:100%; height:100%; } */
#supersized li.image-loading img {
  visibility: hidden;
}
#supersized li.prevslide img,
#supersized li.activeslide img {
  display: inline;
}

#supersized img {
  max-width: none !important;
}
</style>