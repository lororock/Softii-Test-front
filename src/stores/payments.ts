import { defineStore } from 'pinia'

export const usePaymentsStore = defineStore('payments', {
  state: () => ({
    total: 0
  }),
  actions: {
    increment() {
      this.total++
    }
  }
})