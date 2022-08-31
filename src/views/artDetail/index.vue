<template>
  <div id="artDetail">
    <md-editor v-model="text" previewOnly show-code-row-number :marked-heading-id="generateId" @onGetCatalog="onGetCatalog"/>
    <div id="catalogue" class="shadow-lg rounded-xl" :class="catalogueStyle">
      <ul>
        <li v-for="(item, i) in catalogList" :key="i" :class="activeIndex === i ? 'active-li' : ''">
          <a :href="`#${item.text}`" :data-level="item.level">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { getArticleList } from '@/api/api'
import { useStore } from '@/store/index'
import { useRoute } from "vue-router"
import navScroll from '@/hooks/navScroll'

const store = useStore()
const generateId = (_text: any, _level: any, index: any) => `heading-${index}`
const route = useRoute()
const text = ref<any>('')
const catalogList = ref<any>([])
const catalogueStyle = ref<String>('catalogueAbsolute')
const { activeIndex, toScrollTop } = navScroll()

// 获取文章详情
const articleList = async () => {
  const res: any = await getArticleList(route.query)
  console.log(res[0])
  text.value = res[0].articleContent
}
articleList()

const hScroll = computed(() => {
  return store.scroll
})

// 菜单定位模式
watch(hScroll, (newVal)=>{
  console.log(hScroll, 54444)
  if (newVal > 0) {
    catalogueStyle.value = 'catalogueFixed'
  } else {
    catalogueStyle.value = 'catalogueAbsolute'
  }
})

// v3去除 h标签内a标签
MdEditor.config({
  markedRenderer(renderer) {
    renderer.heading = (text, level, _r, _s, index) => {
      const id = generateId(text, level, index);
      // return `<h${level} id="${text}">${text}</h${level}>`
      // 添加暗锚,跳转高度下将170
      return `<h${level} id="${id}">${text}</h${level}><a name="${text}" style="position: relative; top: -170px;" class="darkAnchor"></a>`
    }
    return renderer
  }
})
// v3菜单
const onGetCatalog = (list: []) => {
  catalogList.value = list
  console.log(catalogList.value)
}

</script>

<style lang="scss" scoped>
#artDetail {
  position: relative;
  width: 100%;
  margin: auto;
  #md-editor-v3 {
    margin: auto;
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
  #catalogue {
    display: none;
  }
  .catalogueFixed {
    position: fixed;
    top: 100px;
    right: 360px;
  }
  .catalogueAbsolute {
    position: absolute;
    top: 0;
    right: 0;
  }
}

@media screen and (min-width: 320px) {
  #md-editor-v3 {
    width: 95%;
  }
}
@media screen and (min-width: 800px) {
  #md-editor-v3 {
    width: 95%;
  }
}
@media screen and (min-width: 1200px) {
  #artDetail {
    width: 1200px;
    #md-editor-v3 {
      width: 820px;
      margin: unset;
    }
    #catalogue {
      display: block;
      width: 300px;
      background: #ffffff;
      z-index: 5;
      text-align: left;
      ul {
        height: 100%;
        list-style: none;
        margin: 0;
        padding: 20px;
        li {
          height: 30px;
          border-radius: 6px;
          &:hover {
            background: #f7f8fa;
            a {
              font-weight: 700;
            }
          }
          a {
            display: block;
            width: 100%;
            height: 100%;
            color: #000;
            &[data-level="1"] {
              padding-left: 10px;
            }
            &[data-level="2"] {
              padding-left: 20px;
            }
            &[data-level="3"] {
              padding-left: 30px;
            }
            &[data-level="4"] {
              padding-left: 40px;
            }
            line-height: 30px;
          }
        }
        .active-li {
          background: #f7f8fa;
          a {
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>