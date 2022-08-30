<template>
  <div id="artDetail" >
    <md-editor v-model="text" previewOnly show-code-row-number :marked-heading-id="generateId" @onGetCatalog="onGetCatalog"/>
  </div>
  <div id="catalogue">

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { getArticleList } from '@/api/api'
import { useRoute } from "vue-router"

const generateId = (_text: any, _level: any, index: any) => `heading-${index}`
const route = useRoute()
const text = ref<any>('')
const catalogList = ref<any>([])
const article: any = ref(null)
const hList: any = ref(['h1','h2','h3','h4'])
// 获取文章详情
const articleList = async () => {
  const res: any = await getArticleList(route.query)
  console.log(res[0])
  text.value = res[0].articleContent
}
articleList()

MdEditor.config({
  markedRenderer(renderer) {
    renderer.heading = (text, level, _r, _s, index) => {
      const id = generateId(text, level, index);
      return `<h${level} id="${id}">${text}</h${level}>`
    }
    return renderer
  }
})

const onGetCatalog = (list: []) => {
  catalogList.value = list
  console.log(catalogList.value)
}
// onMounted(() => {
//   setTimeout(()=>{
//     console.log(article.value.$el.childNodes[2].childNodes[1].childNodes[0].childNodes)
//     const h1List: any = Array.from(document.getElementsByTagName('h1'))
//     const h2List: any = Array.from(document.getElementsByTagName('h2'))
//     const h3List: any = Array.from(document.getElementsByTagName('h3'))
//     const hList: any = [...h1List,...h2List,...h3List]
//     hList.map((item:any) => {
//       const obj = {

//       }
//     })
//     console.log(hList)
//   },300)
// })
</script>

<style lang="scss" scoped>
#md-editor-v3 {
  width: 900px;
  margin: auto;
  text-align: left;
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
</style>