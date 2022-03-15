import { defineStore } from 'pinia'
import { ref } from 'vue'

// defineStore中的第一个参数需要在你整个应用当中保持唯一。
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: state => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

// 可以在defineStore中使用类setup的写法：直接将上面的配置项替换成一个函数：
export const useCounterStore2 = defineStore('counter2', () => {
  const count = ref(0)

  function increment() {
    count.value++
  }

  return { count, increment }
})
