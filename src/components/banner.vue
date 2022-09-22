<template>
  <div id="currencyBanner">
    <!-- <img :src="coverUrl" alt=""> -->
    <div class="inner"></div>
    <div class="title">更新日志</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@media screen and (min-width: 1280px) { 
  #currencyBanner {
    display: block;
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    .inner {
      width: 100%;
      height: 100%;
      filter: blur(4px) brightness(1);
      background: url('@/assets/111.jpg') no-repeat 0 50%;
      background-size: 100%;
      font-size: 38px;
      font-weight: 700;
      color: #fff;
      line-height: 400px;
    }
    .title {
      position: absolute;
      top: 40%;
      left: 0;
      right: 0;
      margin: auto;
      font-size: 38px;
      font-weight: 700;
      color: #fff;
    }
  }
}
</style>