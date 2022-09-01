<template>
  <div id="home">
    <header class="w-screen leading-none text-3xl mb-6 shadow-lg" >
      <span class="title">千拾的博客</span>
      <div style="position: absolute; right: 30px; margin: auto; top: 0; bottom: 0;">
        <router-link to="/" style="margin-right: 30px; font-size: 14px;">首页</router-link>
        <router-link to="/friendshipChain" style="margin-right: 30px; font-size: 14px;">友链</router-link>
      </div>
    </header>
    <main class="">
      <router-view/>
    </main>
    <footer class="container mx-auto w-screen"> 晋ICP备18013488号-1 千拾 2022</footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from '@/store/index'

const store = useStore()

onMounted(() => {
  window.addEventListener('scroll', (e:any) => {
    if (e.target.id === 'home') {
      store.setScroll(e.target.scrollTop)
    }
  }, true)
})

</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  background: #f4f5f5;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // align-items: center;
  overflow: overlay;
  scroll-behavior: smooth;
  header {
    position: fixed;
    top: 0;
    height: 65px;
    z-index: 1;
    background-color: #ffffffba;
    // background: radial-gradient(transparent, rgba(255, 255, 255, 1) 2px);
    background-size: 4px 4px;
    backdrop-filter: saturate(180%) blur(8px);
    // backdrop-filter: blur(5px);
    line-height: 65px;
    .title {
      display: none;
    }
  }
  main {
    height: auto;
  }

  footer {
    height: 50px;
    line-height: 50px;
    margin: 10px auto;
  }
}
@media screen and (min-width: 320px) {
  #home {
    header {
      text-align: left;
      padding-left: 30px;
      .title {
        display: block;
      }
    }
  }
}
@media screen and (min-width: 800px) {
  #home {
    header {
      text-align: center;
      .title {
      display: none;
    }
    }
  }
}
@media screen and (min-width: 1280px) {
  #home {
    header {
      text-align: center;
      .title {
      display: none;
    }
    }
    main {
      width: 100%;
      height: auto;
    }
  }
}
</style>