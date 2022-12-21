<template>
  <div class="banner">
    <!-- <img :src="coverUrl" alt=""> -->
    <div class="inner" :style="{background: `url(${coverUrl}) no-repeat 0 40%` }"></div>
    <div class="title">{{ title }}</div>
  </div>
  <div id="artDetail">
    <!-- <div class="banner" v-show="isBannerShow"> -->
    <md-editor v-model="text" previewOnly show-code-row-number :marked-heading-id="generateId" @onGetCatalog="onGetCatalog" code-theme="dracula"/>
    <div id="catalogue" :class="catalogueStyle">
      <ul class="rounded-xl" v-if="catalogList.length !== 0">
        <li v-for="(item, i) in catalogList" :key="i" :class="activeIndex === i ? 'active-li' : ''">
          <a :href="`#${item.text}`" :data-level="item.level" :title="item.text">{{ item.text }}</a>
        </li>
      </ul>
      <cityWeather />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { getArticleDetail } from '@/api/api'
import { useStore } from '@/store/index'
import { useRoute } from "vue-router"
import navScroll from '@/hooks/navScroll'
import cityWeather from '@/components/cityWeather.vue'

MdEditor.config({
  editorExtensions: {
    highlight: {
      css: {
        dracula: {
          light:
            'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/base16/snazzy.min.css',
          dark: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/base16/snazzy.min.css'
        }
      }
    }
  }
});
const store = useStore()
const generateId = (_text: any, _level: any, index: any) => `heading-${index}`
const route = useRoute()
const text = ref<any>('')
const title = ref<any>('')
const coverUrl = ref<any>('')
const catalogList = ref<any>([])
const catalogueStyle = ref<String>('catalogueAbsolute')
const { activeIndex, toScrollTop } = navScroll()
// 获取文章详情
const articleList = async () => {
  const res: any = await getArticleDetail(route.query)
  console.log(res)
  text.value = res.articleContent
  title.value = res.title
  coverUrl.value = res.coverUrl
  store.setMyLoading(false)
}
articleList()
const hScroll = computed(() => {
  return store.scroll
})
// 菜单定位模式
watch(hScroll, (newVal)=>{
  console.log(newVal)
  if (newVal > 350) {
    catalogueStyle.value = 'catalogueFixed'
  } else {
    catalogueStyle.value = 'catalogueAbsolute'
  }
})
// v3去除 h标签内a标签
MdEditor.config({
  markedRenderer(renderer:any) {
    renderer.heading = (text:String, level:Number, _r:any, _s:any, index:any) => {
      const id = generateId(text, level, index);
      // return `<h${level} id="${text}">${text}</h${level}>`
      // 添加暗锚,跳转高度下将170
      return `<h${level} id="${id}">${text}</h${level}><a name="${text}" style="position: relative; top: -240px;" class="darkAnchor"></a>`
    }
    return renderer
  }
})
// v3菜单
const onGetCatalog = (list: []) => {
  catalogList.value = list
  console.log(catalogList.value, 699666)
}
</script>

<style lang="scss" scoped>
#artDetail {
  position: relative;
  margin: auto;
  #md-editor-v3 {
    text-align: left;
    padding: 20px;
    @apply rounded-xl;
    .md-preview {
      h1 {
        font-size: 34px;
        font-weight: 700;
        line-height: 1.1;
      }
    }
    h2 {
      font-size: 26px;
      font-weight: 700;
    }
  }
  .catalogueFixed {
    position: fixed;
    top: 100px;
    right: calc((100% - 1200px) / 2);
  }
  .catalogueAbsolute {
    position: absolute;
    top: 50px;
    right: calc((100% - 1200px) / 2);
  }
}
@media screen and (min-width: 320px) {
  .banner {
    display: none;
  }
  #artDetail {
    padding-top: 80px;
    width: 95%;
  }
}
@media screen and (min-width: 800px) {
  .banner {
    display: block;
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    .inner {
      width: 100%;
      height: 100%;
      filter: blur(40px) brightness(.7);
      background-size: 100% 100% !important;
    }
    .title {
      position: absolute;
      top: 40%;
      left: 0;
      right: 0;
      margin: auto;
      font-size: 32px;
      color: #fff;
    }
  }
  #artDetail {
    padding-top: 50px;
    width: 800px;
  }
}
@media screen and (min-width: 1280px) {
  .banner {
    display: block;
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    .inner {
      width: 100%;
      height: 100%;
      filter: blur(40px) brightness(.7);
      background-size: 100% 100% !important;
    }
    .title {
      position: absolute;
      top: 40%;
      left: 0;
      right: 0;
      margin: auto;
      font-size: 32px;
      color: #fff;
    }
  }
  #artDetail {
    padding-top: 50px;
    width: 1200px;
  }
}
</style>
