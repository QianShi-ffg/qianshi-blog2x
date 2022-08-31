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
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from "vue-router"
import { useStore } from '@/store/index'

const store = useStore()
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

onMounted(() => {
  window.addEventListener('scroll', (e:any) => {
    if (e.target.id === 'home') {
      store.setScroll(e.target.scrollTop)
    }
  }, true)
})

</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  background: #f4f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: overlay;
  header {
    position: fixed;
    top: 0;
    height: 65px;
    z-index: 1;
  }
  main {
    width: 100%;
    margin-top: 100px;
  }

  footer {
    height: 50px;
    line-height: 50px;
    margin: 10px auto;
  }
}
</style>