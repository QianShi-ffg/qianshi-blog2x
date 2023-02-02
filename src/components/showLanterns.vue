<template>
  <div id="showLanterns">
    <lantern class="left" :value="'春节'"></lantern>
    <lantern class="right" :value="'快乐'"></lantern>
  </div>
</template>

<script setup lang="ts">
import lantern from "./lantern.vue";
</script>

<style lang="scss" scoped>
#showLanterns {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  padding: 50px;
  .left {
    float: left;
  }
}
</style>
