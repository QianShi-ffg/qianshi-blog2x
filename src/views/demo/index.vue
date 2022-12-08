<template>
  <div id="demo">
    <div class="card"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
#demo {
  max-width: 1280px;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  .card {
    width: 20%;
    height: 150px;
    background: var(--home-box-background-color);
  }
}
</style>