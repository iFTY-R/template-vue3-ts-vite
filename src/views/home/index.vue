<template>
  <div>hello vue3</div>
  <div @click="counter.increment()">
    {{ counter.count }} {{ count }}
  </div>
</template>

<script lang="ts" setup>
  import { useCounterStore } from '@/stores/counters'
  import { storeToRefs } from 'pinia'

  const counter = useCounterStore
  console.log(counter)
  const { count } = storeToRefs(counter)
</script>
