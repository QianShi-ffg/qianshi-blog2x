<template>
  <div id="home">
    <header class="w-screen leading-none text-3xl mb-6 shadow-lg" >
      千拾的博客
      <div style="position: absolute; right: 30px; margin: auto; top: 0; bottom: 0;">
        <router-link to="/" style="margin-right: 30px; font-size: 14px;">首页</router-link>
        <router-link to="/friendshipChain" style="margin-right: 30px; font-size: 14px;">友链</router-link>
      </div>
    </header>
    <main class="container mx-auto w-screen">
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
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: overlay;
  header {
    position: fixed;
    top: 0;
    height: 65px;
    z-index: 1;
    text-align: center;
    background: radial-gradient(transparent, rgba(255, 255, 255, 1) 2px);
    background-size: 4px 4px;
    backdrop-filter: blur(5px);
    line-height: 65px;
  }
  main {
    width: 100%;
    margin-top: 100px;
  }

  footer {
    height: 50px;
    line-height: 50px;
    margin: 10px auto;
  }
}
</style>