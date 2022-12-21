<template>
  <currencyBanner :title="'关于我'"/>
  <div id="about">
    <div class="content">
      一位懒癌上身，随缘更新的前端cv工程师
      <p>
        <span class="icon hoverIcon">
          <a href="https://github.com/QianShi-ffg" target="_blank" rel="noopener noreferrer">
          </a>
        </span>
        <span class="icon hoverIcon">
        </span>
        <span class="icon weixin"></span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from '@/store';
import currencyBanner from '@/components/banner.vue'

const store = useStore()

onMounted(() => {
  store.setMyLoading(false)
})
</script>

<style scoped lang="scss">
  #about {
    position: relative;
    margin: 0 auto;
    padding: 70px 0;
  }
@media screen and (min-width: 1280px){
  #about {
    width: 1280px;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top: 100px;
      width: 80%;
      height: 500px;
      background: var(--home-box-background-color);
      margin: 0 auto;
      p {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        .icon {
          width: 20px;
          height: 20px;
          cursor: pointer;
          // mix-blend-mode: multiply;
          // background: red;
          &:not(:nth-child(2n)) {
            background-image: url('@/assets/github.svg');
            background-size: cover;
            margin-right: 20px;
            a {
              display: inline-block;
              width: 100%;
              height: 100%;
            }
          }
          &:nth-child(2n) {
            background-image: url('@/assets/weixin.svg');
            background-size: cover;
            position: relative;
            &:hover ~ .weixin{
                display: block;
            }
          }

          &:last-child {
              position: absolute;
              left: 42%;
              bottom: 25%;
              display: none;
              width: 200px;
              height: 200px;
              background: url('@/assets/weixin.png');
              background-size: cover;
              &:hover {
                filter: unset;
              }
            }
        }
        .hoverIcon {
          &:hover {
            filter: brightness(5) drop-shadow(0 0 5px rgb(204, 0, 0));
          }
        }
      }
    }
  }
}
</style>