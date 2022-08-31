<template>
  <div id="artlist">
    <div v-for="item in artList" :key="item.id"
      class="artListItem text-left p-8 mb-6 text-2xl bg-gray-50 rounded-xl cursor-pointer shadow-lg opacity-80"
      @click="artDetail(item.id)">
      {{ item.title }}
    </div>
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

#artlist {
  margin: auto;
  .artListItem {
    transition: all 0.5s;
    &:hover {
      @apply scale-105
    }
  }
}
@media screen and (min-width: 320px) {
  #artlist {
    width: 95%;
    margin: auto;
  }
}
@media screen and (min-width: 800px) {
  #artlist {
    width: 800px;
    margin: auto;
  }
}
@media screen and (min-width: 1200px) {
  #artlist {
    width: 1250px;
    margin: auto;
  }
}
</style>