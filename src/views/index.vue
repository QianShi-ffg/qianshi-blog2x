<template>
  <div id="home">
    <header class="w-screen leading-none text-3xl mb-6 shadow-lg" ref="header">
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
const header = ref()

onMounted(() => {
  window.addEventListener('scroll', (e:any) => {
    if (e.target.id === 'home') {
      store.setScroll(e.target.scrollTop)
      if (e.target.scrollTop !== 0) {
        header.value.style.backgroundColor = '#ffffff4d'
        header.value.style.backdropFilter = 'saturate(170%) blur(5px)'
      } else {
        header.value.style.backgroundColor = 'unset'
        header.value.style.backdropFilter = 'unset'
      }
    }
  }, true)
})

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
    z-index: 1;
    transition-property: background-color;
    transition-duration: 1s;
    background-size: 4px 4px;
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

</style>