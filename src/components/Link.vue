<template>
  <div class="main">
    <el-input v-model="input" placeholder="请输入标题"></el-input>
    <mavon-editor class="app" v-model="value" />
    <div class="m-auto">
      <el-button type="primary" @click="publish">发布</el-button>
      <el-button type="info" @click="nopublish">取消发布</el-button>
    </div>
  </div>
</template>
 
<script>
import Axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      value: "",
      input: ""
    };
  },
  methods: {
    publish() {
      if (this.input == ""|| this.value == "") {
            alert('不编辑博客别瞎点')
      }else{
         Axios.post(
          "/blogs",
          qs.stringify({
            zuti: this.input,
            neirong: this.value
          })
        ).then(Response => {
          console.log(Response.data);
        });
        this.input = "";
        this.value = "";
          alert('发布成功')
      }
    },
    nopublish(){
      this.input = "";
        this.value = "";
    }
  }
};
</script>

<style>
.main {
  width: 100vw;
  height: 100vh;
  background: #fff;
}
.app {
  width: 100vw;
  height: 70vh;
}
iframe {
  width: 800px;
  height: 100vh;
  display: block;
  margin: 0 auto;
  z-index: 1;
}
.m-auto {
  text-align: center;
}
.m-auto button {
  margin: 10px 50px;
}
</style>
