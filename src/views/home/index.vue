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
                <span>分类: {{ classifyList.filter((ii:any) => { return ii.id === item.classifyId })[0].name }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <paginationVue :total="conditionTotal" :currentObj="paginationObj" @onCurrentChange="onCurrentChange" v-if="total > paginationObj.pageSize"/>
    </div>
    <div class="userMsg">
      <div class="userDesc">
        <img src="@/assets/user.jpg" alt="">
        <span class="userName">千拾</span>
        <div class="num-box">
          <div class="num1">
            <p class="p1">{{ total }}</p>
            <p class="p2">文章</p>
          </div>
          <div class="num1">
            <p class="p1">{{ classifyList.length }}</p>
            <p class="p2">分类</p>
          </div>
        </div>
      </div>
      <div class="timeDetail">
        博客已平稳运行{{ days }}天
      </div>
      <div class="category">
        <p>分类</p>
        <ul>
          <li @click="selectArtList('category', 10000)">
            <span>全部</span>
            <span>{{ artCount }}</span>
          </li>
          <li v-for="item in classifyList" :key="item.id" @click="selectArtList('category', item.id)">
            <span>{{ item.name }}</span>
            <span>{{ item.artNum }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getArticleList, aWord, getClassifyIdList } from '@/api/api'
import { date } from '@/util/date'
import { ref, reactive, watch, computed } from 'vue'
import { useRouter, useRoute } from "vue-router"
import { useStore } from '@/store'
import paginationVue from '@/components/pagination.vue'

const store = useStore()
const artList: any = ref([])
const artCount = ref<Number>(0)
const total = ref<Number>(0)
const days = ref<Number>(0)
const conditionTotal: any = ref(0)
const bannerInner: any = ref()
const classifyList: any = ref([])
const paginationObj: any = reactive({
  page: 1, 
  pageSize: 10
})
const router = useRouter()
// 获取文章列表
const articleList = async (params: object) => {
  const res:any = await getArticleList(Object.assign(params, paginationObj))
  artList.value = res.rows
  total.value = res.total
  conditionTotal.value = res.conditionTotal
  console.log(777)
  return res.length
}

const time = () => {
  const start:any = new Date('2022-08-31'); //开始的时间
  const end:any = new Date(); //结束的时间
  const se = end - start; //计算两个时间之间的秒数
  console.log((se / (24 * 3600 * 1000)))
  days.value = Math.floor(se / (24 * 3600 * 1000)); // 计算天数
}

const classify = async() => {
  const res = await getClassifyIdList({})
  classifyList.value = res
} 

const init = async() => {
  await time()
  await classify()
  artCount.value = await articleList({})
}
init()
const artDetail = (id: any) => {
  // router.push({ path: '/artDetail', query: { id: id } })
  const url = router.resolve({ path: '/artDetail',query: { id: id } })
  window.open(url.href, '_blank')
  // const homeDom:any = document.querySelector('#home')
  // homeDom.scrollTop = 0
}

const selectArtList = async(value:string, item:Number) => {
  paginationObj.page = 1
  if (item === 10000) {
    paginationObj.id = null
    paginationObj.type = null
    articleList({})
  } else {
    paginationObj.id = item
    paginationObj.type = value
    const params = {
      type: value,
      id: item
    }
    articleList(params)
  }
  scrollHome()
}

const hScroll = computed(() => {
  return store.scroll
})

const scrollHome = () => {
  const homeDom:any = document.querySelector('#home')
  homeDom.scrollTop = window.innerHeight - 65
  console.log(window.innerHeight - 65)
  console.log(666)
}

const onCurrentChange = async(value:Number) => {
  paginationObj.page = value
  await articleList({})
  await scrollHome()
}
// 菜单定位模式
watch(hScroll, (newVal)=>{
})

</script>
<style lang="scss" scoped>
#artlist {
  margin: auto;
  padding-top: 100px;
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
        // box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
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
            // box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.1);
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
    .userMsg {
      display: none;
    }
  }
}
@media screen and (min-width: 800px) {
  #artlist {
    width: 800px;
    .leftList {
      width: 100%;
      .artBox {
        position: relative;
        width: 100%;
        margin-bottom: 20px;
        transition: all 0.5s;
        // box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
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
            // box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
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
    .userMsg {
      display: none;
    }
  }
}
@media screen and (min-width: 1280px) {
  #artlist {
    position: relative;
    width: 1200px;
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
          filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.2));
          h2 {
            top: 100px;
          }
          .container {
            .imgBox {
              img {
                filter: saturate(120%);
                transform: scale(1.1);
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
            // box-shadow: 0px 0px 8px 0px rgb(0, 0, 0, 0.5);
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
            // box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
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
    .userMsg {
      user-select: none;
      display: block;
      position: absolute;
      top: 100px;
      right: 0;
      width: 300px;
      // height: 500px;
      // box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      background: #fff;
      transition: all 0.5s;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      &:hover {
        box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
      }
      .userDesc {
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50px;
          margin-bottom: 15px;
        }
        .userName {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .num-box {
          width: 100%;
          align-items: center;
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
          .num1 {
            width: 30%;
          }
          .num1:first-child {
            border-right: 2px solid #000;
          }
        }
      }
      .timeDetail {
        padding: 10px 0 20px;
      }
      .category {
        width: 100%;
        p {
          text-align: left;
          padding-left: 30px;
          background: url('@/assets/category.svg') no-repeat 10px 1px;
          background-size: 18px;
          margin-bottom: 2px;
        }
        ul {
          list-style: none;
          padding: 5px 10px;
          li {
            height: 35px;
            line-height: 35px;
            // box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
            margin-bottom: 10px;
            border-radius: 6px;
            text-align: left;
            padding: 0 20px;
            cursor: pointer;
            transition: all 0.5s;
            span:last-child {
              float: right;
            }
            &:hover {
              transform: scale(1.05);
              box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
    }
  }
}
</style>