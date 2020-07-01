<template>
  <div class="container mian">
    <h1 class="text-center">留言板</h1>
    <div class="container">
      <div class="commentbox">
        <textarea
          cols="80"
          rows="50"
          placeholder="来说几句吧......"
          class="mytextarea"
          id="content"
          v-model="text"
        ></textarea>
        <div class="btn btn-info pull-right" id="comment" @click="comment">评论</div>
      </div>
      <div class="comment-list" v-for="(item,index) in context" :key="'item' +index">
        <div class="comment-info">
          <header>
            <img src="../assets/img/img.jpg" />
          </header>
          <div class="comment-right">
            <h4>用户:{{user}}</h4>
            <div class="comment-content-header">
              <span>
                <i class="glyphicon glyphicon-time"></i>
                {{item.comment.datatime}}
              </span>
              <span>
                <i class="glyphicon glyphicon-map-marker"></i>武汉
              </span>
            </div>
            <p class="content">{{item.comment.datatext}}</p>
            <div class="comment-content-footer">
              <div class="row">
                <div class="col-md-10">
                  <span>
                    <i class="glyphicon glyphicon-globe"></i> 谷歌
                  </span>
                </div>
                <div
                  class="reply-list"
                  v-for="(items,indexs) in  msgtext"
                  :key="'items' +indexs"
                >
                  <div class="reply-list-in">
                    <h4>用户:{{user}}</h4>
                    <span>
                      <i class="glyphicon glyphicon-time"></i>
                     {{items.comments.msgtime}}
                    </span>
                    <span>
                      <i class></i>武汉
                    </span>
                    <p class="gehe">{{items.comments.msgtext}}</p>
                    <el-button type="info" style="float:right" data-toggle="modal" data-target="#layer">删除回复</el-button>
                  </div>
                  <!-- //模态框 -->
                  <div role="dialog" class="modal fade bs-example-modal-sm" id="layer">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">
                            <span>×</span>
                          </button>
                          <h4  class="modal-title">确认删除么?</h4>
                        </div>
                        <div class="modal-body text-right">
                          <button class="btn btn-danger btn-sm" data-dismiss="modal">取消</button>
                          <button
                            v-on:click="deleteMsg(nowIndex)"
                            class="btn btn-primary btn-primary btn-sm"
                            data-dismiss="modal"
                          >确定</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <el-button @click="show(index)">{{indexshow == index?'收起':'回复'}}</el-button>
                <div v-if="indexshow==index" style="margin-top: 10px; height: 100px;">
                  <el-collapse-transition>
                    <div>
                      <el-input class="huifu" v-model="input" placeholder="请输入您的回复"></el-input>
                      <el-button style="float: right;margin-top:10px" type="success" @click="btn">提交</el-button>
                    </div>
                  </el-collapse-transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      text: "",
      context: "",
      user: "",
      time: "",
      show3: true,
      indexshow: 0,
      //留言板用户信息
      input: "",
      nowIndex: -100,
      msgtime:'',
      msgtext: [],
    };
  },
  mounted() {
    Axios.get("/selectbooks").then(Response => {
      this.context = Response.data;
      let LoginFlag = sessionStorage.getItem("user");
      this.user = LoginFlag;
    });
     Axios.get("/reply").then(Response => {
      this.msgtext = Response.data;
      console.log(this.msgtext);
    });
  },
  methods: {
    comment() {
      if (this.text === "") {
        alert("兄弟啥都不写就别乱点评论了好吗，爸爸爱你");
      } else {
        //获取发布时间
        const datatext = this.text;
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var d = date.getDate();
        d = d < 10 ? "0" + d : d;
        var h = date.getHours();
        h = h < 10 ? "0" + h : h;
        var minute = date.getMinutes();
        minute = minute < 10 ? "0" + minute : minute;
        var second = date.getSeconds();
        second = second < 10 ? "0" + second : second;
        this.time =
          y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
        Axios.get("/guestbook", {
          params: {
            datatext: datatext,
            datatime: this.time
          }
        }).then(Response => {
          console.log(Response.data);
        });
        this.text = "";
        location.reload();
      }
    },
    show(index) {
      if (this.indexshow == index) {
        this.indexshow = -1;
      } else {
        this.indexshow = index;
      }
    },
    btn() {
       if(this.input){
        const msgtext = this.input;
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var d = date.getDate();
        d = d < 10 ? "0" + d : d;
        var h = date.getHours();
        h = h < 10 ? "0" + h : h;
        var minute = date.getMinutes();
        minute = minute < 10 ? "0" + minute : minute;
        var second = date.getSeconds();
        second = second < 10 ? "0" + second : second;
        this.msgtime =
          y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
        Axios.get("/msgleave", {
          params: {
            msgtext:msgtext,
            msgtime: this.msgtime
          }
        }).then(Response => {
          console.log(Response.data);
        });
         }
         this.input=''
    },
    deleteMsg: function(n) {
      if (n == -2) {
        this.msgtext = [];
      } else {
        this.msgtext.splice(n, 1);
      }
    }
  }
};
</script>
<style scoped>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.text-center {
  text-align: center;
}
.mian {
  background: #ffffff;
}
.container {
  width: 1200px;
  height: 200%;
}
.commentbox {
  width: 900px;
  margin: 20px auto;
}
.mytextarea {
  width: 100%;
  overflow: auto;
  word-break: break-all;
  height: 100px;
  color: #000;
  font-size: 1em;
  resize: none;
}
.comment-list {
  width: 900px;
  margin: 20px auto;
  clear: both;
  padding-top: 20px;
}
.comment-list .comment-info {
  position: relative;
  margin-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.comment-list .comment-info header {
  width: 10%;
  position: absolute;
}
.comment-list .comment-info header img {
  width: 100%;
  border-radius: 50%;
  padding: 5px;
}
.comment-list .comment-info .comment-right {
  padding: 5px 0px 5px 11%;
}
.comment-list .comment-info .comment-right h3 {
  margin: 5px 0px;
}
.comment-list .comment-info .comment-right .comment-content-header {
  height: 25px;
}
.comment-list .comment-info .comment-right .comment-content-header span,
.comment-list .comment-info .comment-right .comment-content-footer span {
  padding-right: 2em;
  color: #aaa;
}
.comment-list .comment-info .comment-right .comment-content-header span,
.comment-list
  .comment-info
  .comment-right
  .comment-content-footer
  span.reply-btn,
.send,
.reply-list-btn {
  cursor: pointer;
}
.comment-list .comment-info .comment-right .reply-list {
  border-left: 3px solid #ccc;
  padding-left: 7px;
}
.comment-list .comment-info .comment-right .reply-list .reply {
  border-bottom: 1px dashed #ccc;
}
.comment-list .comment-info .comment-right .reply-list .reply div span {
  padding-left: 10px;
}
.comment-list .comment-info .comment-right .reply-list .reply p span {
  padding-right: 2em;
  color: #aaa;
}
.reply-list {
  margin: 10px 0px;
}
.reply-list-in {
  padding: 20px 0px;
}
.gehe {
  padding-top: 10px;
}
</style>