<template>
  <div id="home">
    <header class="w-screen leading-none text-3xl mb-6 shadow-lg" ref="header">
      <span class="title">千拾的博客</span>
      <div style="position: absolute; right: 30px; margin: auto; top: 0; bottom: 0;" class="menu">
        <input type="checkbox" name="check" id="check">
        <label for="check">
          <div class="menuIcon" ref="menuIcon">
            <i></i>
          </div>
        </label>
        <ul>
          <li @click="menuClick">
            <router-link to="/">首页</router-link>
          </li>
          <li @click="menuClick">
            <router-link to="/friendshipChain">友链</router-link>
          </li>
          <li @click="menuClick">
            <router-link to="/log">更新日志</router-link>
          </li>
        </ul>
      </div>
    </header>
    <section id="banner" v-show="isBannerShow">
      <div class="bannerInner" ref="bannerInner">
        千拾的博客
      </div>
      <div class="aWord">{{ aWordText }}</div>
    </section>
    <main>
      <router-view/>
    </main>
    <footer class="container mx-auto w-screen"> 晋ICP备18013488号-1 千拾 2022</footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useStore } from '@/store/index'
import { useRoute } from 'vue-router'
import { aWord } from '@/api/api'

const store = useStore()
const route = useRoute()
const header = ref()
const menuIcon = ref()
const aWordText = ref<String>('') 
const bannerInner: any = ref()
const isBannerShow = ref<boolean>(true)

onMounted(() => {
  isShow(window.location.pathname)
  window.addEventListener('scroll', (e:any) => {
    if (e.target.id === 'home') {
      store.setScroll(e.target.scrollTop)
      if (e.target.scrollTop !== 0) {
        header.value.style.backgroundColor = '#3434344a'
        header.value.style.backdropFilter = 'saturate(180%) blur(6px)'
        bannerInner.value.style.backgroundPosition = `calc(50% + ${e.target.scrollTop}px) calc(50% + ${e.target.scrollTop}px)`
        bannerInner.value.classList.add('textStroke')
      } else {
        header.value.style.backgroundColor = 'unset'
        header.value.style.backdropFilter = 'unset'
        bannerInner.value.style.backgroundPosition = ''
        bannerInner.value.classList.remove('textStroke')
      }
    }
  }, true)
})
const path = computed(() => {
  return route.path
})

watch(path, (newVal) => {
  isShow(newVal)
})
const isShow = (value:string) => {
  if (value === '/') {
    isBannerShow.value = true
  } else {
    isBannerShow.value = false
  }
}

const init = async() => {
  const res:any = await aWord({})
  aWordText.value = `${res.hitokoto} - ${res.from}`
}
init()

const menuClick = () => {
  if (window.innerWidth <= 800) {
    menuIcon.value.click()
  }
}

</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  background: #f4f5f5;
  overflow: overlay;
  scroll-behavior: smooth;
  header {
    position: fixed;
    top: 0px;
    height: 65px;
    z-index: 9;
    transition-property: background-color;
    transition-duration: 1s;
    background-size: 4px 4px;
    line-height: 65px;
    .menu {
      position: relative;
      .menuIcon {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 25px;
        height: 25px;
        i {
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          display: inline-block;
          width: 100%;
          height: 3px;
          background: #000;
        }
        &::before {
          position: absolute;
          top: 1px;
          display: block;
          content: '';
          width: 25px;
          height: 3px;
          background: #000;
          transition: all .5s;
        }
        &::after {
          position: absolute;
          bottom: 1px;
          display: block;
          content: '';
          width: 25px;
          height: 3px;
          background: #000;
          transition: all .5s;
        }
      }
      #check {
        display: none;
      }
    }
  }
  #banner {
  position: relative;
  .aWord {
    position: absolute;
    bottom: 35px;
    right: 55px;
    font-size: 20px;
    font-weight: 700;
    color: transparent;
    // -webkit-text-stroke: 1px rgba(219, 219, 219, 0.411);
    // background: linear-gradient(45deg, #ffeb3b, #009688, yellowgreen, pink, #03a9f4, #9c27b0, #8bc34a);
    background: linear-gradient(90deg, transparent 0%, rgb(110, 110, 110) 20%, rgb(255, 255, 255) 50%, rgb(110, 110, 110) 80%, transparent 100%);
    background-size: 80%;
    background-repeat: no-repeat;
    background-clip: text;
    animation: huerotate 5s linear infinite;
  }
}
@keyframes huerotate {
  from {
    background-position: -500%;
  }
  to {
    background-position: 500%;
  }
}
.textStroke {
  -webkit-text-stroke: 1px rgba(219, 219, 219, 0.411);
}
  main {
    height: auto;
    margin: auto;
    // padding-top: 100px;
  }

  footer {
    height: 50px;
    line-height: 50px;
    margin: 10px auto;
    text-align: center;
  }
}
@keyframes menuUl {
  to {
    transform: translateX(0);
  } from {
    transform: translateX(-100vw);
  }
}
</style>