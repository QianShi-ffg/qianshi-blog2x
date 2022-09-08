<template>
  <div id="friendshipChain">
    <banner class="banner">
      <div class="people">

      </div>
    </banner>
    <div class="friendshipList">
      <ul>
        <li v-for="(item, index) in friendshipList" :key="index" class="friendshipItem rounded-xl cursor-pointer shadow-lg">
          <a :href="item.blog" target="_blank">
            <img :src="item.img" alt="">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const friendshipList:any = ref([{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  blog: 'https://blog.xiaolong0418.com/',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  blog: 'https://blog.xiaolong0418.com/',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  blog: 'https://blog.xiaolong0418.com/',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  blog: 'https://blog.xiaolong0418.com/',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  blog: 'https://blog.xiaolong0418.com/',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  blog: 'https://blog.xiaolong0418.com/',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  blog: 'https://blog.xiaolong0418.com/',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  blog: 'https://blog.xiaolong0418.com/',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  blog: 'https://blog.xiaolong0418.com/',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
},
{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  blog: 'https://blog.xiaolong0418.com/',
  introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
}])
</script>

<style lang="scss" scoped>
#friendshipChain {
  height: calc(100vh - 100px - 70px);
  position: relative;
  .banner {
    position: relative;
    display: block;
    width: 100%;
    height: 300px;
    overflow: hidden;
    .people {
      position: absolute;
      left: -125px;
      bottom: 0;
      width: 125px;
      height: 200px;
      background: url('@/assets/run.png') no-repeat 0;
      animation: run 1s steps(12,end) infinite,
      move 10s linear infinite;
    }
  }
  .friendshipList {
    width: 100%;
    height: 322px;
    overflow: hidden;
    ul {
      width: auto;
      height: 100%;
      list-style: none;
      .friendshipItem {
        width: 262px;
        height: 125px;
        background: #f8f9fa;
        margin: 18px;
        border-radius: 10px;
        float: left;
        a {
          position: relative;
          display: inline-block;
          width: 100%;
          height: 100%;
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
    }
  }
}
@media screen and (min-width: 320px) {
  .banner {
    display: none;
  }
}


@media screen and (min-width: 800px) {
  .banner {
    display: block;
  }
}


@media screen and (min-width: 1280px) {
  #friendshipChain {
    .banner {
      display: block;
    }
  }
}
@keyframes run{
    0%{
      background-position:0 0;
      // transform: translateX(0);
    }
    100% {
      background-position:-1680px 0;
      // transform: translateX(1280px);
    }
  }
  @keyframes move{
    0%{
      transform: translateX(0);
    }
    100% {
      transform: translateX(1280px);
    }
  }
</style>