<template>
  <div id="friendshipChain">
    <div v-for="(item, index) in friendshipList" :key="index" class="friendshipItem rounded-xl cursor-pointer shadow-lg">
      <img :src="item.img" alt="">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const friendshipList:any = ref([{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
}])
</script>

<style lang="scss" scoped>
#friendshipChain {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .friendshipItem {
    position: relative;
    width: 22%;
    height: 125px;
    background: #f8f9fa;
    margin: 18px;
    border-radius: 10px;
    img {
      width: 55px;
      height: 55px;
      border-radius: 28px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 25px;
      margin: auto;
    }
  }
}
</style>