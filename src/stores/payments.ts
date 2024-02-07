import { defineStore } from 'pinia'

export const usePaymentsStore = defineStore('payments', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})