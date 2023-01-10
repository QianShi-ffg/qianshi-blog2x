<template>
  <div id="switch">
    <input type="checkbox" id="c" @change="schange" :checked="checked"/>
    <label for="c">
      <div id="a">
        <div id="c1"></div>
        <div id="c2"></div>
        <div id="c3"></div>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useStore } from '@/store';

const store = useStore()
// const checked = ref<boolean>(true)

// watch(()=>store.switchChecked, (newVal) => {
//   console.log(checked.value, newVal)
//   checked.value = newVal
// })

const checked = computed(() => {
  return store.switchChecked
})

const schange = (e:any) => {
  const html: any = document.getElementsByTagName("html")[0];
  if (e.target.checked) {
    html.className = 'light'
    localStorage.setItem('theme', 'light')
  } else {
    html.className = 'dark'
    localStorage.setItem('theme', 'dark')
  }
}

</script>

<style scoped>
* {
  transition: 1s all;
}

#switch {
  width: 45px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 20px;
  margin: auto;
}

input[type=checkbox]+label {
  background-color: #19191980;
  width: 45px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* padding: 10px; */
  /* box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.5); */
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  cursor: hand;
}

#a {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #f0f0f0;
  box-shadow: 0 0 5px rgba(255, 255, 255, 1);
}

#c1,
#c2,
#c3 {
  background-color: rgba(0, 0, 0, 0.03);
  width: 3px;
  height: 3px;
  border-radius: 100%;
  position: relative;
}

#c1 {
  top: 5px;
  left: 2px
}

#c2 {
  top: 5px;
  left: 4px
}

#c3 {
  top: 1px;
  left: 4px;
  width: 5px;
  height: 5px;
}

input[type=checkbox] {
  display: none;
}

/* ----- CHECKED ----- */
input[type=checkbox]:checked+label {
}

input[type=checkbox]:checked+label #a {
  background-color: #f4e94e;
  margin-left: calc(100% - 20px);
  box-shadow: 0 0 8px rgba(249, 240, 104, 1);
}

input[type=checkbox]:checked+label #a * {
  opacity: 0;
}

</style>