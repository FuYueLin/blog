<template>
<div class=" top">
    <section id="gallery-wrapper">
      <article class="white-panel">
        <img src="../assets/imgs/1.jpg" class="thumb" />
        <h1>
          <a href="#">Title 1</a>
        </h1>
        <p>Description 1</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/2.jpg" class="thumb" />
        <h1>
          <a href="#">Title 2</a>
        </h1>
        <p>Description 2</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/3.jpg" class="thumb" />
        <h1>
          <a href="#">Title 3</a>
        </h1>
        <p>Description 3</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/4.jpg" class="thumb" />
        <h1>
          <a href="#">Title 4</a>
        </h1>
        <p>Description 4</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/5.jpg" class="thumb" />
        <h1>
          <a href="#">Title 5</a>
        </h1>
        <p>Description 5</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/6.jpg" class="thumb" />
        <h1>
          <a href="#">Title 6</a>
        </h1>
        <p>Description 6</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/7.jpg" class="thumb" />
        <h1>
          <a href="#">Title 7</a>
        </h1>
        <p>Description 7</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/8.jpg" class="thumb" />
        <h1>
          <a href="#">Title 8</a>
        </h1>
        <p>Description 8</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/9.jpg" class="thumb" />
        <h1>
          <a href="#">Title 9</a>
        </h1>
        <p>Description 9</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/10.jpg" class="thumb" />
        <h1>
          <a href="#">Title 10</a>
        </h1>
        <p>Description 10</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/11.jpg" class="thumb" />
        <h1>
          <a href="#">Title 11</a>
        </h1>
        <p>Description 11</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/12.jpg" class="thumb" />
        <h1>
          <a href="#">Title 12</a>
        </h1>
        <p>Description 12</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/13.jpg" class="thumb" />
        <h1>
          <a href="#">Title 13</a>
        </h1>
        <p>Description 13</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/14.jpg" class="thumb" />
        <h1>
          <a href="#">Title 14</a>
        </h1>
        <p>Description 14</p>
      </article>
      <article class="white-panel">
        <img src="../assets/imgs/15.jpg" class="thumb" />
        <h1>
          <a href="#">Title 15</a>
        </h1>
        <p>Description 15</p>
      </article>
    </section>
    </div>
</template>
   
<script>
export default {
  data() {
    return {};
  },
  mounted:function(){
       $(function(){
            $("#gallery-wrapper").pinterest_grid({
            no_columns: 4,
            padding_x: 20,
            padding_y: 20,
            margin_bottom: 50,
            single_column_breakpoint: 700
        });
       })
  }
   
};
</script>
<style scoped>
#gallery-wrapper {
  position: relative;
  max-width: 75%;
  width: 75%;
  margin: 50px auto;
}

img.thumb {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.white-panel {
  position: absolute;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  padding: 10px;
}

.white-panel h1 {
  font-size: 1em;
}

.white-panel h1 a {
  color: #a92733;
}

.white-panel:hover {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  margin-top: -5px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
article p{
    color:#D5D6E2;
}
</style>
