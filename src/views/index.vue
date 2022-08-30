<template>
  <div id="home">
    <header class="w-screen leading-none text-3xl bg-red-500 mb-6">666</header>
    <main class="container mx-auto w-screen">
      <router-view/>
    </main>
    <footer class="container mx-auto w-screen"> 晋ICP备18013488号-1 千拾 2022</footer>
  </div>
</template>

<script setup lang="ts">
import { getArticleList } from '@/api/api'
import { ref } from 'vue'
import { useRouter, useRoute } from "vue-router"

const artList: any = ref([])
const router = useRouter()
// 获取文章列表
const articleList = async () => {
  const res = await getArticleList({})
  artList.value = res
}
articleList()

const artDetail = (id: any) => {
  router.push({ path: '/artDetail', query: { id: id } })
}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  // overflow-y: overlay;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    position: fixed;
    top: 0;
    height: 65px;
    z-index: 1;
  }

  main {
    width: 1250px;
    margin-top: 100px;
    .artListItem {
      transition: all 0.5s;

      &:hover {
        @apply scale-105
      }
    }
  }

  footer {
    height: 50px;
    line-height: 50px;
    margin: 10px auto;
  }
}
</style>