<template>
  <!-- <div> -->
    <div class="plate" v-if="store.myLoading">
      <div class="mouse">
        <div class="mouse-body"></div>
      </div>
      <div class="miao">
        <div class="face"></div>
        <div class="eyelid eyelid-l"></div>
        <div class="eyelid eyelid-r"></div>
        <div class="eyeball eyeball-l"></div>
        <div class="eyeball eyeball-r"></div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/store/index'

// const props = defineProps({
//   myLoading: {
//     type: Boolean,
//     default: false
//   }
// })

const store = useStore()
// watch(() => props.myLoading, (newVal, oldVal) => {
//   if (newVal !== oldVal) {

//   }
// })

</script>

<style lang="scss" scoped>

.plate {
  // margin: 100px auto;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 50;
  background: var(--myLoading-background-color);
}

.mouse {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 200px;
  height: 200px;
  z-index: 1;
  border-radius: 50%;
  border: solid #fff;
  border-width: 0 0 0 3px;
  animation: rotation 3s infinite ease-in-out;
}

.mouse-body {
  width: 20px;
  height: 35px;
  position: absolute;
  top: -12px;
  left: 65px;
  transform: rotate(75deg);
  background-color: #fff;
  border-radius: 16px 16px 15px 15px / 40px 40px 15px 15px;
}

.mouse-body::after {
  content: "";
  width: 20px;
  height: 6px;
  position: absolute;
  top: 6px;
  left: 0;
  background-color: #fff;
  border-radius: 3px;
}

.miao {
  width: 84px;
  height: 84px;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.face {
  width: 84px;
  height: 76px;
  background-color: #ffa724;
  border-radius: 42px 42px 30px 30px / 38px 38px 30px 30px;
}

.face:before,
.face:after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  display: block;
  border-radius: 4px;
  border-top: 20px solid transparent;
  border-left: 24px solid #ffa724;
  border-bottom: 20px solid transparent;
}

.face:after {
  right: 0;
  border-right: 30px solid #ffa724;
}

.miao .eyelid {
  width: 35px;
  height: 0;
  background-color: #ffa724;
  position: absolute;
  z-index: 2;
  top: 18px;
  animation: eyelid 3s infinite ease-in-out;
}

.miao .eyelid-l {
  left: 6px;
}

.miao .eyelid-r {
  right: 6px;
}

.miao .eyeball {
  height: 33px;
  width: 33px;
  position: absolute;
  top: 24px;
  background-color: #fff;
  border-radius: 17px;
  animation: rotation 3s infinite ease-in-out;
}

.miao .eyeball-l {
  left: 6px;
}

.miao .eyeball-r {
  right: 6px;
}

.miao .eyeball:after {
  content: "";
  background-color: #878491;
  position: absolute;
  display: block;
  left: 6px;
  top: 6px;
  height: 8px;
  width: 8px;
  border-radius: 4px;
}

@keyframes eyelid {
  0% {
    height: 0px;
  }

  20% {
    height: 0px;
  }

  60% {
    height: 24px;
  }

  90% {
    height: 0px;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
