<template>
  <div id="currencyBanner">
    <!-- <img :src="coverUrl" alt=""> -->
    <div class="inner"></div>
    <div class="title">
      <h1 class="glitch" data-slice="20">{{ props.title }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

onMounted(() => {
  textInit()
})

const random = (min: number, max: number) => {
  min + Math.floor(Math.random() * (max - min + 1))
}
const textInit = () => {
  let glitchTexts:any = document.getElementsByClassName('glitch')[0]
  let content = glitchTexts.textContent
  glitchTexts.textContent = ''
  let slice:any = glitchTexts.dataset.slice;
  glitchTexts.style.setProperty('--slice-count', slice)
  for (let i = 0; i <= Number(slice); i++) {
    let span = document.createElement('span')
    span.textContent = content;
    span.style.setProperty('--i', `${i + 1}`)
    if (i !== Number(slice)) {
      span.style.animationDelay = `${random(100, 300)}ms`
    }
    glitchTexts.append(span)
  }
}

</script>

<style lang="scss" scoped>
#currencyBanner {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;

  .inner {
    width: 100%;
    height: 100%;
    filter: blur(4px) brightness(1);
    background: url('@/assets/111.jpg') no-repeat 0 50%;
    background-size: 100%;
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    line-height: 400px;
  }

  .title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    h1 {
      font-size: 3rem;
      color: white;
    }
  }
}

@media screen and (min-width: 320px) {
  #currencyBanner {
    display: none;
  }
}

@media screen and (min-width: 800px) {
  #currencyBanner {
    display: block;
  }
}

@media screen and (min-width: 1280px) {
  #currencyBanner {
    display: block;
  }
}

</style>