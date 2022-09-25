<template>
    <el-pagination background layout="prev, pager, next" :total="total" :page-size="currentObj.pageSize" @current-change="currentChange"
        :current-page="currentObj.page" />
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    default: 0
  },
  currentObj: {
    type: Object,
    default: {
      page: 1,
      pageSize: 10
    }
  }
})
const emit = defineEmits(['onCurrentChange'])
const currentChange = (value:any) => {
  console.log(value)
  emit('onCurrentChange', value)
}
</script>

<style scoped>
</style>