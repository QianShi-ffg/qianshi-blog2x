<template>
  <div id="home">

  </div>
</template>

<script setup lang="ts">
import { getArticleList } from '@/api/api'
// 获取文章列表
getArticleList({})
</script>

<style lang="scss" scoped>
#home {
  width: 500px;
  height: 400px;
  background: red;
}
</style>