<template>
  <div id="app">
    <header class="header ant-layout-header">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">daohnag</span>
            <span class="icon-bar bg-success"></span>
            <span class="icon-bar bg-success"></span>
            <span class="icon-bar bg-success"></span>
          </button>
          <a class="navbar-brand">
            <img src="./assets/img/logo5.png" />觅未创意
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link tag="a" class="scrollto" to="/">关于我的</router-link>
            </li>
            <router-link tag="li" to="/blog">
              <a class="scrollto in ins">个人博客</a>
            </router-link>
            <router-link tag="li" to="/hobby">
              <a class="scrollto">个性展示</a>
            </router-link>
            <router-link tag="li" to="/guestbook">
              <a class="scrollto">给我留言</a>
            </router-link>
            <router-link tag="li" to="/Link">
              <a class="scrollto">编辑博客</a>
            </router-link>
            <router-link
              v-if="!username"
              tag="button"
              class="btn btn-info btnmeiju"
              to="/Login"
              id="btn"
            >登入/注册</router-link>
            <router-link
              v-if="username"
              tag="button"
              class="btn btn-info btnmeiju"
              to="/Login"
              id="btn"
            >欢迎你{{username}}</router-link>
          </ul>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  mounted() {
    let LoginFlag = sessionStorage.getItem("user");
    this.username = LoginFlag;
  }
};
</script>

<style scoped>
#navbar {
  width: 100%;
  background: #fff;
}
@media (max-width: 767px) {
  .nav {
    width: 100%;
    background: #fff;
    padding-left: 30px;
    z-index: 1;
  }
  .in .ins {
    width: 79px;
    padding: 15px 2px;
    margin: 0 0 0 11px;
  }
  #btn{
    padding: 8px 56px;
    outline: none;
    border: transparent;
    margin: 0px 0px 0 13px;
    float: none;
  }
}

.ant-layout-header {
  height: 64px;
  padding: 0 50px;
  line-height: 64px;
  z-index: 1;
  background: #fff;
}
.navbar-brand {
  font-family: "Microsoft YaHei", "宋体", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #2f2e2e;
  letter-spacing: 5px;
}
.navbar-brand img {
  height: 28px;
  margin-top: -4px;
  display: inline;
  padding: 0 10px;
}
.icon-bar {
  background: #2f2e2e;
}
.scrollto {
  color: #2f2e2e;
  font-family: "Microsoft YaHei", "宋体", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-weight: bold;
}
.scrollto:hover {
  color: red;
  background: transparent;
}
.in {
  width: 75px;
  padding: 0;
  padding: 15px 0px;
  position: relative;
}
.in::before {
  content: "";
  width: 10px;
  height: 10px;
  display: block;
  float: right;
  border-top: 1px solid;
  border-right: 1px solid;
  transform: rotate(45deg);
  margin-top: 5px;
  transition: all 0.3s linear;
}
.in:hover::before {
  transform: rotate(135deg);
}
.btn {
  float: right;
  margin-top: 12px;
  padding: 2px 10px;
  outline: none;
  border: transparent;
}
.slide {
  width: 100%;
  height: 360px;
}

.slide img {
  width: 100%;
  height: 100%;
}

.border {
  width: 100%;
  height: 360px;
  border: 1px solid red;
}
</style>