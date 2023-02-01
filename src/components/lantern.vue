<template>
  <div id="lantern">
    <div id="deng">
      <div class="top center"></div>
      <div class="deng0">
        <div class="deng1 center"></div>
        <div class="deng2 center"></div>
        <div class="text center">{{ props.value }}</div>
        <div class="bottom center"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})

</script>

<style lang="scss" scoped>
#lantern {
  #deng {
    position: relative;
    width: 220px;
    height: 155px;
    margin: auto;
    padding: 10px;

    .center {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
    }
  }

  .top {
    top: -5px;
    width: 25px;
    height: 25px;
    background: red;
    border-radius: 50%;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #e3c335;
      box-shadow: 0 0 2px 0 #1d1e22;
      content: ''
    }
  }

  .deng0 {
    position: relative;
    width: 195px;
    height: 155px;
    background-image: linear-gradient(90deg, #ff00008a, #e30f0f, red, #e30f0f, #ff0000ba);
    margin: 50px auto;
    border-radius: 50%;
    animation: swing 5s infinite ease-in-out;
    transform-origin: 50% -38%;
    box-shadow: 0 0 45px 5px #f7a000;
    &::before,
    &::after {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      display: inline-block;
      content: '';
    }

    &::before {
      top: -45px;
      background-color: #ff0000;
      width: 2px;
      height: 40px;
    }

    &::after {
      background-color: #e89702;
      background-image: linear-gradient(90deg, #e89702 0%, #e3c436 20%, #e89702 40%, #e3c436 60%, #e89702 100%);
      top: -9px;
      width: 92px;
      height: 18px;
      border-radius: 5px 5px 0 0;
    }

    .deng1,
    .deng2 {
      top: 0;
      height: 100%;
      border: 2px solid #f7a000;
      box-sizing: border-box;
      border-radius: 50%;
      // box-shadow: 2px 0 5px 0 #520000d1;
    }

    .deng1 {
      position: relative;
      width: 135px;

      &::after {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        display: inline-block;
        content: '';
        background-color: #e89702;
        background-image: linear-gradient(90deg, #e89702, #e3c436, #e89702, #e3c436, #e89702);
        bottom: -11px;
        width: 92px;
        height: 18px;
        border-radius: 0 0 5px 5px;
        z-index: 2;
      }
    }

    .deng2 {
      width: 65px;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 40px;
      height: 100%;
      margin: auto;
      font-size: 46px;
      font-family: cursive;
      color: #e3c132;
      writing-mode: vertical-rl;
    }

    .bottom {
      bottom: -28px;
      width: 4px;
      height: 20px;
      background: #e7a00c;
      animation: swing1 4.8s infinite ease-in-out;
      transform-origin: 50% 0;

      &::before {
        position: absolute;
        bottom: -70px;
        left: -8px;
        right: -8px;
        margin: auto;
        display: inline-block;
        content: '';
        width: 16px;
        height: 70px;
        background-image: linear-gradient(90deg, #b12405, #e30f0f, red, #e30f0f, #b12405, #b12405, #e30f0f, red, #e30f0f, #b12405, #b12405, #e30f0f, red, #e30f0f, #b12405, #b12405, #e30f0f, red, #e30f0f, #b12405, #b12405, #e30f0f, red, #e30f0f, #b12405, #b12405, #e30f0f, red, #e30f0f, #b12405, #b12405, #e30f0f, red, #e30f0f, #b12405, #b12405, #e30f0f, red, #e30f0f, #b12405, #b12405, #e30f0f, red, #e30f0f, #b12405);
        border-radius: 50% 50% 0 0/15% 15% 0 0;
      }

      &::after {
        position: absolute;
        bottom: -15px;
        left: -8px;
        right: -8px;
        margin: auto;
        display: inline-block;
        content: '';
        width: 16px;
        height: 5px;
        background: #e7a00c;
      }
    }
  }

  @keyframes swing {
    0% {
      transform: rotate(-15deg);
    }

    50% {
      transform: rotate(15deg);
    }

    100% {
      transform: rotate(-15deg);
    }
  }

  @keyframes swing1 {
    0% {
      transform: rotate(20deg);
    }

    50% {
      transform: rotate(-20deg);
    }

    100% {
      transform: rotate(20deg);
    }
  }
}
</style>
