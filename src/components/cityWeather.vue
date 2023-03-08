<template>
  <div id="cityWeather" class="rounded-xl" v-if="weatherData.address">
    <div class="city">{{ cityData }}</div>
    <div class="currentTemperature">{{ weatherData.temperature }}℃</div>
    <div class="currentSkycon">
      <img :src="weatherUrl" alt="">
      {{ weatherData.skyconCn }}
    </div>
    <div class="detail">
      {{ 'PM2.5:' + ' ' + weatherData.pm25 }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { getCityWeather } from '@/api/api'
import { getWeatherUrl } from '@/util/url'

const weatherData = ref<any>({
  address: '',
  pm25: 0,
  skyconCn: '',
  skyconEn: '',
  temperature: 0
})
onMounted(async()=> {
  const res = await getCityWeather({})
  weatherData.value = res
})

const cityData = computed(() => {
  return weatherData.value.address.split('|').slice(1,3).join(' ')
})

const weatherUrl = computed(() => {
  return new URL(`/src/assets/weather/${ weatherData.value.skyconEn }.png`, import.meta.url).href
})

</script>

<style lang="scss" scoped>
#cityWeather {
  position: relative;
  width: 100%;
  height: 135px;
  background: var(--home-box-background-color);
  color: var(--color);
  // border-radius: 6px;
  margin-bottom: 15px;
  transition: all 0.5s;
  padding: 20px;
  .city,.currentTemperature {
    text-align: center;
    color: var(--color);
    font-size: 18px;
    font-weight: 700;
    font-family: monospace;
  }
  .currentSkycon {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--color);
    img {
      width: 26px;
      height: 26px;
      margin-right: 5px;
    }
    font-size: 12px;
  }
  .detail {
    padding-left: 5px;
    text-align: left;
    font-size: 12px;
  }
}

.guo-feng {
  #cityWeather {
    &::after {
      position: absolute;
      top: -5px;
      left: -10px;
      width: 330px;
      height: 155px;
      background: url("@/assets/cityWeatherBorder.png") no-repeat;
      background-size: 100% 100%;
      content: "";
    }
  }
}
</style>