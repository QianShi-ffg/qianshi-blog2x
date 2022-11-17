<template>
  <currencyBanner :title="'友情链接'" />
  <div id="friendshipChain">
    <div v-for="(item, index) in listData" :key="index" class="friendsItem">
      <div class="friendsItem_1">
        <img :src="item.icon" alt="">
        <div class="intr">
          <p>{{ item.name }}</p>
          <p :title="item.desc" class="desc">{{ item.desc }}</p>
          <!-- <iframe :src="item.blogUrl" frameborder="0" width="1920" height="1080" class="iframe"></iframe> -->
          <img :src="item.screenShot" alt="" class="iframe">
        </div>
        <a :href="item.blogUrl" target="_blank" class="btn">GO</a>
      </div>
    </div>
    <div class="friendshipList">
      <ul>
        <li v-for="(item, index) in listData" :key="index" class="friendshipItem rounded-xl cursor-pointer shadow-lg">
          <a :href="item.blogUrl" target="_blank">
            <img :src="item.icon" alt="">
            <div class="intr">
              <p>{{ item.name }}</p>
              <p :title="item.desc">{{ item.desc }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import currencyBanner from '@/components/banner.vue'
import { getFriendShipList } from '@/api/api'

const innerWidth = ref<number>(0)
onMounted(() => {
  innerWidth.value = window.innerWidth
})

const listData = ref<any>([])

const init = async() => {
  const res:any = await getFriendShipList({})
  listData.value = res.map((item:any) => {
    item.screenShot = `${import.meta.env.VITE_BASE_URL}${item.screenShot}`
    return item
  })
  console.log(listData.value, 785222)
}

init()


</script>

<style lang="scss" scoped>
#friendshipChain {
  margin: 0 auto;
  position: relative;

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
    height: auto;
    .friendsItem {
      display: none;
    }
    .friendshipList {
      display: block;
      width: 100%;
      height: 100%;
      overflow: overlay;

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
    height: auto;
    .friendsItem {
      display: none;
    }
    .friendshipList {
      display: block;
      width: 100%;
      height: calc(100% - 40px);
      overflow: overlay;

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
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 500px;
    margin: 0 auto;
    flex-wrap: wrap;
    // position: relative;
    .friendsItem {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 23%;
      height: 125px;
      margin-bottom: 45px;
      .friendsItem_1 {
        position: absolute;
        background: #fff;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        z-index: 0;
        transition: all 0.3s ease-in-out;
        img {
          border: 2px solid #fff;
          position: absolute;
          top: -40px;
          left: 0;
          right: 0;
          margin: auto;
          width: 80px;
          height: 80px;
          border-radius: 40px;
          background: #fff;
        }
        .intr {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 40px 20px 20px;
          p {
            // padding-right: 25px;
            text-align: left;
          }
          .desc {
            height: 48px;
            font-size: 13px;
            word-break: break-all; //在恰当的断字点进行换行 
            overflow: hidden; //文字超出的进行隐藏
            text-overflow: ellipsis; //超出的文字用省略号表示
            display: -webkit-box; //将元素设为盒子伸缩模型显示         //利用盒子模型 
            -webkit-box-orient: vertical; //伸缩方向设为垂直方向
            -webkit-line-clamp: 2;
          }
          .iframe {
            position: absolute;
            left: 0;
            bottom: 0;
            top: 0;
            right: 0;
            margin: auto;
            width: 85%;
            height: 0;
            opacity: 0;
            transition: all 0.3s;
            border-radius: 0;
            border: 2px solid rgba(201, 201, 201, 0.205);
          }
        }
        .btn {
          position: absolute;
          bottom: 10px;
          right: 20px;
          display: inline-block;
          width: 45px;
          background: #ff9359;
          color: #fff;
          border-radius: 6px;
          opacity: 0;
          transition: all 0.3s;
          &:hover {
            background: #ff5e08;
          }
        }
      }

      &:not(:nth-child(4n)) {
        margin-right: 30px;
      }

      &:hover {
        .friendsItem_1 {
          filter: drop-shadow(0px 0px 15px rgba(131, 131, 131, 0.411));
          // box-shadow: 0px 0px 15px 0px rgba(131, 131, 131, 0.411);
          background: #fff;
          height: 300px;
          z-index: 10;
          .intr {
            position: relative;
            .desc {
              display: none;
            }
            .iframe {
              height: 130px;
              opacity: 1;
            }
          }
          .btn {
            opacity: 1;
          }
        }
      }
    }

    .friendshipList {
      display: none;
    }
  }
}
</style>