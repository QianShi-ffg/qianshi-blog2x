<template>
  <div id="home">
    <header class="w-screen leading-none text-3xl bg-red-500 mb-6">666</header>
    <main class="container mx-auto w-screen">
      <div v-for="item in artList" :key="item.id"
        class="artListItem text-left p-8 mb-6 text-2xl bg-gray-50 rounded-xl cursor-pointer shadow-lg opacity-80"
        @click="artDetail(item.id)">
        {{ item.title }}
      </div>
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

  header {
    height: 65px;
  }

  main {
    width: 1250px;

    .artListItem {
      transition: all 0.5s;

      &:hover {
        @apply scale-105
      }
    }
  }

  footer {
    height: 30px;
    line-height: 30px;
    margin: 10px auto;
  }
}
</style>