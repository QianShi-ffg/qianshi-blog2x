<template>
   <section id="banner">
      <div class="bannerInner" ref="bannerInner">
        千拾的博客
      </div>
      <div class="aWord">{{ aWordText }}</div>
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
import { getArticleList, aWord } from '@/api/api'
import { date } from '@/util/date'
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from "vue-router"
import { useStore } from '@/store'

const store = useStore()
const artList: any = ref([])
const bannerInner: any = ref()
const router = useRouter()
const aWordText = ref<String>('') 
// 获取文章列表
const articleList = async () => {
  const res = await getArticleList({})
  artList.value = res
}

const init = async() => {
  const res:any = await aWord({})
  aWordText.value = `${res.hitokoto} - ${res.from}`
  articleList()
}
init()
const artDetail = (id: any) => {
  router.push({ path: '/artDetail', query: { id: id } })
}

const hScroll = computed(() => {
  return store.scroll
})

watch(hScroll, (newVal) => {
  if (newVal !== 0) {
    bannerInner.value.style.backgroundPosition = `calc(50% + ${newVal}px) calc(50% + ${newVal}px)`
    bannerInner.value.classList.add('textStroke')
  } else {
    bannerInner.value.style.backgroundPosition = ''
    bannerInner.value.classList.remove('textStroke')
  }
})
</script>

<style lang="scss" scoped>
#banner {
  position: relative;
  .aWord {
    position: absolute;
    bottom: 35px;
    right: 55px;
    font-size: 20px;
    font-weight: 700;
    color: transparent;
    // -webkit-text-stroke: 1px rgba(219, 219, 219, 0.411);
    // background: linear-gradient(45deg, #ffeb3b, #009688, yellowgreen, pink, #03a9f4, #9c27b0, #8bc34a);
    background: linear-gradient(90deg, transparent 0%, rgb(110, 110, 110) 20%, rgb(255, 255, 255) 50%, rgb(110, 110, 110) 80%, transparent 100%);
    background-size: 80%;
    background-repeat: no-repeat;
    background-clip: text;
    animation: huerotate 5s linear infinite;
  }
}
@keyframes huerotate {
  from {
    background-position: -500%;
  }
  to {
    background-position: 500%;
  }
}
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
.textStroke {
  -webkit-text-stroke: 1px rgba(219, 219, 219, 0.411);
}
</style>