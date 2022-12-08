<template>
  <currencyBanner :title="'关于我'"/>
  <div id="about">
    <div class="content">
      
    </div>
  </div>
</template>

<script setup lang="ts">
import currencyBanner from '@/components/banner.vue'
</script>

<style scoped lang="scss">
  #about {
    margin: 0 auto;
    padding: 70px 0;
  }
@media screen and (min-width: 1280px){
  #about {
    width: 1280px;
    .content {
      width: 80%;
      height: 500px;
      background: var(--home-box-background-color);
      margin: 0 auto;
    }
  }
}
</style>