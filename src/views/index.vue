<template>
  <div id="blogIndex">
    <div class="title">
      首页背景图抠字
    </div>
    <div class="mask">
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
#blogIndex {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('@/assets/111.jpg') no-repeat;
  background-size: 100% 100%;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsla(0, 0%, 100%, .4);
    backdrop-filter: saturate(180%), blur(2);
    z-index: 1;
  }
  .title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 100vh;
    color: transparent;
    background: url('@/assets/111.jpg') no-repeat;
    background-size: 100% 100%;
    background-clip: text;
    font-size: 80px;
    font-weight: 700;
    z-index: 2;
  }
}
</style>