<template>
  <currencyBanner :title="'友情链接'"/>
  <div id="friendshipChain">
    <div class="friendshipList">
      <ul>
        <li v-for="(item, index) in friendshipList" :key="index" class="friendshipItem rounded-xl cursor-pointer shadow-lg">
          <a :href="item.blog" target="_blank">
            <img :src="item.img" alt="">
            <div class="intr">
              <p>{{ item.name }}</p>
              <p :title="item.introduce">{{ item.introduce }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import currencyBanner from '@/components/banner.vue'
const friendshipList:any = ref([{
  name: '小白龙',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/logo.jpg',
  blog: 'https://blog.xiaolong0418.com/',
  introduce: '一个简简单单的程序员导航网站'
},
{
  name: '宿愿Cc',
  img: 'https://blog.liufengmao.cn/theme_images/avatar-2.png',
  blog: 'https://blog.liufengmao.cn/',
  introduce: '过去的人真笨，过去的人真难。'
},
{
  name: 'nice哥',
  img: 'https://xiaolongosscdn.liam0418.com/navigation/images/nice.ico',
  blog: 'https://xiaojiju.com/',
  introduce: '一位来自广州的前端程序员 喜欢学习研究代码'
},
{
  name: '酱',
  img: 'https://jiang-xia.top/favicon.ico',
  blog: 'https://jiang-xia.top/',
  introduce: '一位来自广州的前端程序员 喜欢看电影，玩游戏，学技术。'
},
{
  name: '蒜薹炒肉加辣',
  img: 'https://suantaichaorou.top/favicon.ico',
  blog: 'https://suantaichaorou.top/',
  introduce: '你还没真的努力过，就轻易输给了懒惰.'
},
{
  name: '灰熊',
  img: 'https://www.hackslog.com/flower.ico',
  blog: 'https://www.hackslog.com/',
  introduce: '进击的全栈Coder'
},
{
  name: 'Candy',
  img: 'https://store-jielong.oss-cn-shanghai.aliyuncs.com/est/public/avatar.jpg',
  blog: 'https://www.candy.icu/',
  introduce: "It's only the fairy tale"
},
{
  name: 'Candy',
  img: 'https://xiaolongosscdn.liam0418.com/myblog/images/e8ee4bf0560882c867bb8c39256958c9.ico',
  blog: 'http://candyblog.top/',
  introduce: '一名在广州漂泊的前端小白，喜欢学习技术和粤语文化 ，记录进步的点点滴滴'
},
{
  name: '月巴',
  img: 'https://img2.baidu.com/it/u=2380653095,1521923625&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=499',
  blog: 'http://www.chenyuzj.top/',
  introduce: '3K程序员的博客'
},
{
  name: '芋头',
  img: 'https://xiaolongosscdn.liam0418.com/navigation/images/yutou.ico',
  blog: 'http://yutouweb.cn/',
  introduce: '一个小宇宙待爆发且充满激情的前端爱好者'
}
])
</script>

<style lang="scss" scoped>
#friendshipChain {
  margin: 0 auto;
  position: relative;
  // .banner {
  //   position: relative;
  //   display: block;
  //   width: 100%;
  //   height: 300px;
  //   overflow: hidden;
  //   .people {
  //     position: absolute;
  //     left: -125px;
  //     bottom: 0;
  //     width: 125px;
  //     height: 200px;
  //     background: url('@/assets/run.png') no-repeat 0;
  //     animation: run 1s steps(12,end) infinite,
  //     move 10s linear infinite;
  //   }
  // }
  .friendshipList {
    width: 100%;
    height: calc(100% - 50px - 20px);
    overflow: hidden;
    ul {
      width: auto;
      height: 100%;
      list-style: none;
      overflow: overlay;
      .friendshipItem {
        width: 262px;
        height: 125px;
        background: #f8f9fa;
        margin: 18px;
        border-radius: 10px;
        float: left;
        transition: all 0.5s;
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.411);
          a {
            color: #000;
          }
        }
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
          .intr {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 20px 0 20px 100px;
            p {
              padding-right: 25px;
              text-align: left;
              &:last-child {
                height: 48px;
                font-size: 12px;
                word-break: break-all;           //在恰当的断字点进行换行 
                overflow: hidden;                 //文字超出的进行隐藏
                text-overflow: ellipsis;          //超出的文字用省略号表示
                display: -webkit-box;             //将元素设为盒子伸缩模型显示         //利用盒子模型 
                -webkit-box-orient: vertical;     //伸缩方向设为垂直方向
                -webkit-line-clamp: 2; 
              }
            }
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
  #friendshipChain {
    width: 95%;
    padding-top: 80px;
    padding-bottom: 20px;
    height: calc(100vh - 70px);
    .friendshipList {
      width: 100%;
      height: 100%;
      overflow: hidden;
      ul {
        .friendshipItem {
          margin: 12px 0;
          width: 99%;
        }
      }
    }
  }
}


@media screen and (min-width: 800px) {
  #friendshipChain {
    width: 800px;
    padding: 50px 0;
    height: calc(100vh - 400px - 70px);
    .friendshipList {
      width: 100%;
      height: calc(100% - 40px);
      overflow: hidden;
      ul {
        .friendshipItem {
          margin: 18px;
          width: 28%;
        }
      }
    }
  }
}


@media screen and (min-width: 1280px) {
  #friendshipChain {
    padding: 70px 0;
    width: 1200px;
    height: calc(100vh - 400px - 70px);
    .friendshipList {
      width: 100%;
      height: 100%;
      overflow: hidden;
      ul {
        .friendshipItem {
          width: 262px;
        }
      }
    }
  }
}
// @keyframes run{
//     0%{
//       background-position:0 0;
//       // transform: translateX(0);
//     }
//     100% {
//       background-position:-1680px 0;
//       // transform: translateX(1280px);
//     }
//   }
//   @keyframes move{
//     0%{
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(1280px);
//     }
//   }
</style>