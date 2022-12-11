<template>
  <currencyBanner :title="'Demo展示'" />
  <div id="demo">
    <div
      class="card"
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-delay="200"
      data-sal-easing="ease-out-back"
      v-for="item in demo"
      :key="item"
    >
    <a :href="item.path" target="_blank">{{ item.name }}</a>
  </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import currencyBanner from "@/components/banner.vue";
import demo from '@/assets/js/demo.js';
import sal from "sal.js";
// import 'sal.js/dist/sal.css';
onMounted(() => {
  sal();
});
</script>

<style lang="scss" scoped>
#demo {
  max-width: 1280px;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  .card {
    width: 20%;
    height: 150px;
    background: var(--home-box-background-color);
    padding: 0 10px;
    background-clip: content-box;
    margin-bottom: 30px;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
