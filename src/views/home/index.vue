<template>
  <div id="artlist">
    <div class="leftList">
      <div class="artBox" v-for="item in artList" :key="item.id" @click="artDetail(item.id)">
        <h2>{{ item.title }}</h2>
        <div class="container">
          <div class="imgBox">
            <img :src="item.coverUrl" alt="" v-if="item.coverUrl">
            <img src="@/assets/111.jpg" alt="" v-else>
          </div>
          <div class="content">
            <div class="desc">
              <div style="width:45px;height:80px;float:left; clear: both;" align="center" class="div111"></div>
              {{ item.describe }}
              <p class="artEpitomize">
                <span>作者: 千拾</span>
                <span>发布时间: {{ date(item.updataTime) }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="userMsg">

    </div>

    <!-- <div v-for="item in artList" :key="item.id"
      class="artListItem text-left p-5 mb-6 text-2xl bg-gray-50 rounded-xl cursor-pointer shadow-lg opacity-80"
      @click="artDetail(item.id)">
      <p>{{ item.title }}</p>
      <p class="artEpitomize">
        <span>作者: 千拾</span>
        <span>发布时间: {{ date(item.updataTime) }}</span>
      </p>
    </div> -->
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
// 获取文章列表
const articleList = async () => {
  const res = await getArticleList({})
  artList.value = res
}

const init = async() => {
  articleList()
}
init()
const artDetail = (id: any) => {
  router.push({ path: '/artDetail', query: { id: id } })
}


const hScroll = computed(() => {
  return store.scroll
})

// 菜单定位模式
watch(hScroll, (newVal)=>{
})

</script>
<style lang="scss" scoped>
#artlist {
  margin: auto;
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
@media screen and (min-width: 320px) {
  #artlist {
    width: 95%;
    .leftList {
      width: 100%;
      .artBox {
        position: relative;
        width: 100%;
        margin-bottom: 20px;
        transition: all 0.5s;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.274);
        border-radius: 6px;
        cursor: pointer;
        h2 {
          position: absolute;
          top: 58%;
          left: 0;
          width: 100%;
          margin-bottom: 20px;
          font-size: 20px;
          color: #000;
          z-index: 2;
          transition: all 0.5s;
        }
        .container {
          position: relative;
          display: flex;
          flex-direction: column;
          max-width: 100%;
          justify-content: space-between;
          align-items: center;
          margin: 0;
          .imgBox {
            position: relative;
            width: 100%;
            height: 200px;
            overflow: hidden;
            border-radius: 6px 6px 0 0 ;
            img {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              width: 100%;
              z-index: 1;
              object-fit: cover;
              transition: all 0.5s;
            }
          }
          .content {
            position: relative;
            // top: 58px;
            // left: 200px;
            // margin-bottom: 20px;
            padding: 60px 20px 25px;
            background: #fff;
            font-size: 14px;
            z-index: 1;
            width: 100%;
            height: 170px;
            color: #000;
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
            border-radius: 0 0 6px 6px;
            text-align: start;
            transition: all 0.5s;
            .div111 {
              display: none;
            }
            .desc {
              width: 100%;
              height: 50%;
              word-break: break-all;           //在恰当的断字点进行换行 
              overflow: hidden;                 //文字超出的进行隐藏
              text-overflow: ellipsis;          //超出的文字用省略号表示
              display: -webkit-box;             //将元素设为盒子伸缩模型显示         //利用盒子模型 
              -webkit-box-orient: vertical;     //伸缩方向设为垂直方向
              -webkit-line-clamp: 2; 
              user-select: none;
            }
            .artEpitomize {
              position: absolute;
              bottom: 10px;
              left: 20px;
              transition: all 0.5s;
              span {
                margin-right: 20px;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 800px) {
  #artlist {
    .leftList {
      width: 100%;
      .artBox {
        position: relative;
        width: 100%;
        margin-bottom: 20px;
        transition: all 0.5s;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.274);
        border-radius: 6px;
        cursor: pointer;
        h2 {
          position: absolute;
          top: 20px;
          left: 270px;
          width: auto;
          margin-bottom: 20px;
          font-size: 20px;
          color: #000;
          z-index: 2;
          transition: all 0.5s;
        }
        .container {
          position: relative;
          display: flex;
          flex-direction: row;
          max-width: 100%;
          justify-content: space-between;
          align-items: center;
          margin: 0;
          .imgBox {
            position: relative;
            width: 250px;
            height: 170px;
            overflow: hidden;
            border-radius: 6px 0 0 6px;
            img {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              width: 100%;
              height: 100%;
              z-index: 2;
              object-fit: cover;
              transition: all 0.5s;
            }
          }
          .content {
            position: relative;
            // top: 58px;
            // left: 200px;
            // margin-bottom: 20px;
            padding: 60px 20px 25px;
            background: #fff;
            font-size: 14px;
            z-index: 1;
            width: calc(100% - 250px);
            height: 170px;
            color: #000;
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
            border-radius: 0 6px 6px 0;
            text-align: start;
            transition: all 0.5s;
            .div111 {
              display: none;
            }
            .desc {
              width: 100%;
              height: 50%;
              word-break: break-all;           //在恰当的断字点进行换行 
              overflow: hidden;                 //文字超出的进行隐藏
              text-overflow: ellipsis;          //超出的文字用省略号表示
              display: -webkit-box;             //将元素设为盒子伸缩模型显示         //利用盒子模型 
              -webkit-box-orient: vertical;     //伸缩方向设为垂直方向
              -webkit-line-clamp: 2; 
              user-select: none;
            }
            .artEpitomize {
              position: absolute;
              bottom: 10px;
              left: 20px;
              transition: all 0.5s;
              span {
                margin-right: 20px;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1280px) {
  #artlist {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .leftList {
      width: 70%;
      .artBox {
        position: relative;
        width: 100%;
        margin-bottom: 70px;
        transition: all 0.5s;
        box-shadow: none;
        cursor: pointer;
        &:hover {
          filter: drop-shadow(5px 5px 8px rgba(0, 0, 0, 0.411));
          h2 {
            top: 100px;
          }
          .container {
            .imgBox {
              img {
                filter: saturate(120%);
              }
            }
            .content {
              top: 30px;
              .artEpitomize {
                opacity: 0;
              }
            }
          }
        }
        h2 {
          position: absolute;
          top: 20px;
          left: 300px;
          width: auto;
          margin-bottom: 20px;
          font-size: 30px;
          color: #000;
          transition: all 0.5s;
          z-index: 0;
        }
        .container {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .imgBox {
            position: relative;
            width: 250px;
            height: 160px;
            overflow: hidden;
            z-index: 2;
            box-shadow: 2px 2px 8px 0px rgb(0, 0, 0, 0.5);
            border-radius: 6px;
            img {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              width: 100%;
              height: 100%;
              z-index: 2;
              object-fit: cover;
              transition: all 0.5s;
            }
          }
          .content {
            position: absolute;
            top: 58px;
            left: 200px;
            margin-bottom: 20px;
            padding: 20px 20px 55px;
            background: #fff;
            font-size: 14px;
            z-index: 1;
            width: 630px;
            height: 140px;
            color: #000;
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            text-align: start;
            transition: all 0.5s;
            .div111 {
              display: block;
            }
            .desc {
              width: 100%;
              height: 100%;
              word-break: break-all;            //在恰当的断字点进行换行 
              overflow: hidden;                 //文字超出的进行隐藏
              text-overflow: ellipsis;          //超出的文字用省略号表示
              display: -webkit-box;             //将元素设为盒子伸缩模型显示      //利用盒子模型 
              -webkit-box-orient: vertical;     //伸缩方向设为垂直方向
              -webkit-line-clamp: 3; 
              user-select: none;
            }
            .artEpitomize {
              position: absolute;
              bottom: 8px;
              left: 20px;
              transition: all 0.5s;
              span {
                margin-right: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>