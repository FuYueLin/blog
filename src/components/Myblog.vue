<template>
  <div class="Myblog">
    <!-- 第一栏 -->
    <section id="cover">
      <div class="container">
        <div class="car text-center">
          <div>
            <p>
              CRE
              <br />ATIV
              <br />ITY.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 第二栏 -->
    <section id="services">
      <div class="container">
        <div class="title">
          <h4 class="text-center">我的博客</h4>
          <div></div>
        </div>
        <div class="row">
          <div
            v-for="(item,index) in datas.slice((currentPage -1 )*pagesize,currentPage*pagesize)"
            :key="'item'+index"
            class="col-md-6 col-xs-12 service-item"
          >
            <img src="../assets/img/10.jpg" class="img-rounded" />
            <h4>标题：{{item.data.zuti}}</h4>
            <p>{{item.data.neirong}}</p>
          </div>
        </div>
      </div>
      <div class="block" style="text-align: center;">
        <!-- changePageNum：触发翻页的事件；total：总共的数据行数；size：页面大小； -->
        <!-- size-change	pageSize 改变时会触发	每页条数
        current-change	currentPage 改变时会触发	当前页 -->
        <el-pagination
        background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange" 
      :current-page="currentPage"    	
      :page-size="pagesize"
      layout="total,  prev, pager, next, jumper"
      :total="datas.length">
        ></el-pagination>
      </div>
    </section>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      datas: [],
      pagesize:4,  //每页数据
     currentPage:1    //初始页
    };
  },
  mounted() {
    Axios.get("/select").then(Response => {
      this.datas = Response.data;  
    });
  },
  methods:{
      handleSizeChange(size){
         this.pagesize=size
      },
      handleCurrentChange(currentPage){
        this.currentPage =currentPage
      }
    }
  
};
</script>
<style scoped>
#services {
  padding: 120px 0 100px 0;
  background: #fff;
}
#cover {
  background: url(../assets/img/logo2.jpg) center top no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: scroll;
}
.car {
  width: 360px;
  height: 465px;
  margin: 300px auto;
  background-color: #fff;
  padding: 70px 60px;
}

.car p {
  font-family: "Arial black", "宋体", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 90px;
  line-height: 1;
  font-weight: bold;
  text-align: left;
  margin-bottom: 40px;
}
.car a {
  color: #2f2f2f;
}
.car div {
  position: relative;
}
.car div::before {
  content: "";
  width: 25px;
  height: 25px;
  display: block;
  border-top: 5px solid;
  border-right: 5px solid;
  margin: 0 auto;
  transform: rotate(135deg);
  transition: all 0.5s linear;
  position: absolute;
  top: 100%;
  left: 40%;
}

.car div:hover:before {
  transform: rotate(495deg);
}

.text-center {
  text-align: center;
}
.title h4 {
  font-family: "Microsoft YaHei", "宋体", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 4px;
  text-indent: 6px;
  color: #2f2e2e;
}

.title > div {
  height: 5px;
  width: 30px;
  background-color: #f7931d;
  transition: ease all 0.5s;
  margin: 20px auto 35px auto;
}

.title > div:hover {
  width: 100px;
}

.service-item {
  margin-top: 40px;
  padding: 25px;
}
h4 {
  line-height: 1.6;
  text-align: justify;
}
.img-rounded {
  transition: ease all 0.3s;
  width: 90%;
}
.img-rounded:hover {
  transform: scale(1.1);
}
</style>