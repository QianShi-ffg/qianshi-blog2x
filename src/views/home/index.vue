<template>
   <section id="banner">
      <div class="bannerInner" ref="bannerInner">
        千拾的博客
      </div>
    </section>
  <div id="artlist">
    <div v-for="item in artList" :key="item.id"
      class="artListItem text-left p-5 mb-6 text-2xl bg-gray-50 rounded-xl cursor-pointer shadow-lg opacity-80"
      @click="artDetail(item.id)">
      <p>{{ item.title }}</p>
      <p class="artEpitomize">
        <span>作者: 千拾</span>
        <span>发布时间: {{ date(item.updataTime) }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getArticleList } from '@/api/api'
import { date } from '@/util/date'
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from "vue-router"
import { useStore } from '@/store'

const store = useStore()
const artList: any = ref([])
const bannerInner: any = ref()
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

const hScroll = computed(() => {
  return store.scroll
})

watch(hScroll, (newVal) => {
  if (newVal !== 0) {
    bannerInner.value.style.backgroundPosition = `calc(50% + ${newVal}px) calc(50% + ${newVal}px)`
  } else {
    bannerInner.value.style.backgroundPosition = ''
  }
})
</script>

<style lang="scss" scoped>

#artlist {
  margin: auto;
  margin-top: 100px;
  .artListItem {
    transition: all 0.5s;
    &:hover {
      @apply scale-105
    }
    .artEpitomize {
      margin-top: 10px;
      font-size: 12px;
      span {
        margin-right: 20px;
      }
    }
  }
}
@media screen and (min-width: 320px) {
  #banner {
    display: none;
  }
  #artlist {
    width: 95%;
  }
}
@media screen and (min-width: 800px) {
  #banner {
    display: block;
      width: 100%;
      background: url('@/assets/111.jpg') no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      .bannerInner {
        position: relative;
        width: 100%;
        height: 100vh;
        color: transparent;
        background: url('@/assets/111.jpg') no-repeat;
        background-position: 50% 50%;
        background-size: cover;
        background-clip: text;
        font-size: 7em;
        font-weight: 900;
        text-align: center;
        line-height: 100vh;
        overflow: hidden;

      }
    }
  #artlist {
    width: 800px;
  }
}
@media screen and (min-width: 1280px) {
  #banner {
    display: block;
      width: 100%;
      background: url('@/assets/111.jpg') no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      .bannerInner {
        position: relative;
        width: 100%;
        height: 100vh;
        color: transparent;
        background: url('@/assets/111.jpg') no-repeat;
        background-position: 50% 50%;
        background-size: cover;
        background-clip: text;
        font-size: 7em;
        font-weight: 900;
        text-align: center;
        line-height: 100vh;
        overflow: hidden;

      }
    }
  #artlist {
    width: 1200px;
  }
}
</style>