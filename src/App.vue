<script setup lang="ts">
import loading from '@/components/loading.vue'
</script>

<template>
  <loading />
  <suspense>
    <router-view/>
  </suspense>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
