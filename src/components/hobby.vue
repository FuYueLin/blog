<template>
    <div class="top" > 
        <h1 class="text-center">一点爱好</h1>    
    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="1500">
      <!-- 轮播（Carousel）指标 -->
      <ol class="carousel-indicators in">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>

      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner">
        <div class="item active">
          <img src="../assets/img/6.jpg"  alt="First slide" />
        </div>
        <div class="item">
          <img src="../assets/img/7.jpg" alt="Second slide" />
        </div>
        <div class="item">
          <img src="../assets/img/8.jpeg" alt="Third slide" />
        </div>
        <div class="item">
          <img src="../assets/img/9.jpg" alt="Four slide" />
        </div>
      </div>
      <!-- 轮播（Carousel）导航 -->
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
    
</template>

<style scoped>
.text-center {
  text-align: center;
}
.item img {
  width: 100%;
  height: 880px;
}
.carousel-indicators {
  top: 80%;
}
.carousel-indicators li {
  width: 70px;
border: 1px solid #ccc;
}
.active {
  background-image: linear-gradient(
    to right,
    rgb(226, 211, 211),
    rgb(14, 10, 10)
  );
}
</style>