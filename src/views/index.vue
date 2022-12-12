<template>
  <div id="home">
    <header class="w-screen leading-none text-3xl mb-6" ref="header">
      <span class="title">千拾的博客</span>
      <div style="position: absolute; right: 30px; margin: auto; top: 0; bottom: 0;" class="menu">
        <input type="checkbox" name="check" id="check">
        <label for="check">
          <div class="menuIcon" ref="menuIcon">
            <i></i>
          </div>
        </label>
        <ul>
          <li @click="menuClick('home')">
            <router-link to="/">首页</router-link>
          </li>
          <li @click="menuClick('')">
            <router-link to="/demo">demo</router-link>
          </li>
          <li @click="menuClick('')">
            <router-link to="/friendshipChain">友链</router-link>
          </li>
          <li @click="menuClick('')">
            <router-link to="/log">更新日志</router-link>
          </li>
          <li @click="menuClick('')">
            <router-link to="/about">关于</router-link>
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
      <css-doodle click-to-update style="">
      :doodle {
        @grid: 7 / 100vmax;
        pointer-events: none;
      }
      @shape: clover 5;
      background: hsla(
        calc(360 - @i * 4), 70%, 68%, @r.8
      );
      transform:
        scale(@r(.2, 1.5))
        translate(@m2.@r(±50%));
    </css-doodle>
      <router-view/>
    </main>
    <footer class="container mx-auto w-screen"> 晋ICP备18013488号-1 千拾 2022</footer>
    <div class="scrollTop" ref="scrollTop" @click="goTop">
      <img src="@/assets/scrollTop.svg" alt="">
    </div>
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
const scrollTop = ref()
const aWordText = ref<String>('')
const bannerInner: any = ref()
const isBannerShow = ref<boolean>(true)
onMounted(() => {
  isShow(window.location.pathname)
  window.addEventListener('scroll', (e: any) => {
    if (e.target.id === 'home') {
      store.setScroll(e.target.scrollTop)
      if (e.target.scrollTop !== 0) {
        header.value.style.backgroundColor = '#9999994a'
        header.value.style.backdropFilter = 'saturate(180%) blur(6px)'
        header.value.style.color = '#000'
        bannerInner.value.style.backgroundPosition = `calc(50% + ${e.target.scrollTop}px) calc(50% + ${e.target.scrollTop}px)`
        bannerInner.value.classList.add('textStroke')
        if (e.target.scrollTop > 300) {
          scrollTop.value.style.bottom = '150px'
        }else {
          scrollTop.value.style.bottom = '-70px'
        }
      } else {
        header.value.style.backgroundColor = 'unset'
        header.value.style.backdropFilter = 'unset'
        header.value.style.boxShadow = 'unset'
        bannerInner.value.style.backgroundPosition = ''
        bannerInner.value.classList.remove('textStroke')
        scrollTop.value.style.bottom = '-70px'
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
const isShow = (value: string) => {
  if (value === '/') {
    isBannerShow.value = true
  } else {
    isBannerShow.value = false
  }
}
const init = async () => {
  const res: any = await aWord({})
  aWordText.value = `${res.hitokoto} - ${res.from}`
}
init()
const menuClick = (value:string) => {
  if (window.innerWidth >= 1280) {
    if(value === 'home') {
      const homeDom:any = document.querySelector('#home')
      homeDom.scrollTop = window.innerHeight - 65
    }
  }
  if (window.innerWidth <= 800) {
    menuIcon.value.click()
  }
}
const goTop = () => {
  const homeDom:any = document.querySelector('#home')
  homeDom.scrollTop = 0
}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  // background: #f4f5f5;
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
    user-select: none;
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
    &::before {
      position: absolute;
      content: "";
      inset: 0;
      z-index: 10;
      pointer-events: none;
    }
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
    position: relative;
    height: auto;
    margin: auto;
    min-height: 825px;
    overflow: hidden;
    css-doodle {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: 0;
      // &::after {
      //   content: "";
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   right: 0;
      //   bottom: 0;
      //   backdrop-filter: blur(20px);
      //   z-index: 0;
      // }
    }
  }
  footer {
    height: 50px;
    line-height: 50px;
    margin: 10px auto;
    text-align: center;
  }
  .scrollTop {
    position: fixed;
    right: 10%;
    bottom: -70px;
    z-index: 10;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: var(--home-box-background-color);
    box-shadow: 0 0 10px 1px var(--hover-shadow-color);
    transition: all 0.5s;
    cursor: pointer;
    img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 60%;
      height: 60%;
      transition: all 0.2s;
      filter: var(--scrollTop-img-filter);
    }
    &:hover {
      box-shadow: 0 0 10px 1px var(--home-artBox-shadow-color);
      img {
        animation: huojian 2s linear infinite;
      }
    }
  }
}
@keyframes huojian {
  2% {
    transform: translate(0px,4px) rotate(-2.5deg);
}
4% {
    transform: translateY(6px) rotate(-2.5deg);
}
6% {
    transform: translate(0px,-3px) rotate(-2.5deg);
}
8% {
    transform: translate(0px,7px) rotate(2.5deg);
}
10% {
    transform: translate(0px,-2px) rotate(-.5deg);
}
12% {
    transform: translate(0px,6px) rotate(-1.5deg);
}
14% {
    transform: translate(0px,3px) rotate(2.5deg);
}
16% {
    transform: translate(0px,8px) rotate(2.5deg);
}
18% {
    transform: translate(0px,-8px) rotate(1.5deg);
}
20% {
    transform: translate(0px,1px) rotate(-2.5deg);
}
22% {
    transform: translate(0px,-3px) rotate(.5deg);
}
24% {
    transform: translate(0px,-2px) rotate(-.5deg);
}
26% {
    transform: translate(0px,-3px) rotate(2.5deg);
}
28% {
    transform: translate(0px,5px) rotate(-1.5deg);
}
30% {
    transform: translateY(-1px) rotate(-2.5deg);
}
32% {
    transform: translate(0px,9px) rotate(2.5deg);
}
34% {
    transform: translate(0px,4px) rotate(.5deg);
}
36% {
    transform: translate(0px,3px) rotate(-2.5deg);
}
38% {
    transform: translate(0px,-6px) rotate(1.5deg);
}
40% {
    transform: translate(0px,9px) rotate(2.5deg);
}
42% {
    transform: translate(0px,6px) rotate(2.5deg);
}
44% {
    transform: translate(0px,1px) rotate(1.5deg);
}
46% {
    transform: translate(0px,-2px) rotate(1.5deg);
}
48% {
    transform: translate(0px,1px) rotate(-2.5deg);
}
50% {
    transform: translate(0px,5px) rotate(-.5deg);
}
52% {
    transform: translate(0px,2px) rotate(-.5deg);
}
54% {
    transform: translate(0px,-1px) rotate(-1.5deg);
}
56% {
    transform: translate(0px,5px) rotate(1.5deg);
}
58% {
    transform: translate(0px,-9px) rotate(-1.5deg);
}
60% {
    transform: translate(0px,-9px) rotate(-1.5deg);
}
62% {
    transform: translate(0px,5px) rotate(1.5deg);
}
64% {
    transform: translate(0px,-9px) rotate(-.5deg);
}
66% {
    transform: translate(0px,3px) rotate(-1.5deg);
}
68% {
    transform: translateY(0px) rotate(2.5deg);
}
70% {
    transform: translate(0px,5px) rotate(3.5deg);
}
72% {
    transform: translate(0px,2px) rotate(-.5deg);
}
74% {
    transform: translate(0px,-2px) rotate(-1.5deg);
}
76% {
    transform: translate(0px,2px) rotate(3.5deg);
}
78% {
    transform: translateY(-7px) rotate(-1.5deg);
}
80% {
    transform: translate(0px,8px) rotate(-.5deg);
}
82% {
    transform: translate(0px,4px) rotate(-.5deg);
}
84% {
    transform: translate(0px,1px) rotate(2.5deg);
}
86% {
    transform: translate(8px) rotate(-2.5deg);
}
88% {
    transform: translate(0px,-3px) rotate(.5deg);
}
90% {
    transform: translate(0px,7px) rotate(-2.5deg);
}
92% {
    transform: translate(0px,1px) rotate(-2.5deg);
}
94% {
    transform: translate(0px,6px) rotate(1.5deg);
}
96% {
    transform: translate(0px,-5px) rotate(2.5deg);
}
98% {
    transform: translate(-4px) rotate(.5deg);
}
100% {
    transform: translate(0px) rotate(0deg);
}
}
@keyframes menuUl {
  to {
    transform: translateX(0);
  }
  from {
    transform: translateX(-100vw);
  }
}
</style>