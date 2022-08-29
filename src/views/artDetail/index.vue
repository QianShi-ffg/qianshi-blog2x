<template>
  <div id="artDetail">
    <md-editor v-model="text" previewOnly show-code-row-number/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { getArticleList } from '@/api/api'
import { useRoute } from "vue-router"

const route = useRoute()
console.log()
const text:any = ref('')
// 获取文章详情
const articleList = async () => {
  const res:any = await getArticleList(route.query)
  console.log(res[0])
  text.value = res[0].articleContent
}
articleList()

</script>

<style scoped>
#md-editor-v3 {
  width: 1200px;
  margin: auto;
  text-align: left;
}
</style>