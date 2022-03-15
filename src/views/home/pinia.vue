<script lang="ts" setup>
  import { useCounterStore } from '@/stores/counter'
  import { storeToRefs } from 'pinia'

  const counter = useCounterStore()
  const { count, doubleCount } = storeToRefs(counter)
  const { increment } = counter
</script>

<template>
  <div>hello vue3</div>
  <div class="item">
    <n-button type="primary" @click="counter.increment()">
      {{ counter.count }}*2 = {{ doubleCount }}
    </n-button>
    使用解构
    <div @click="increment()">
      {{ count }}
    </div>
  </div>
</template>

<style scoped>
div.item {
  border: 1px solid red;
  margin: 10px;
}
</style>
