<script lang="ts">
import { storeToRefs } from "pinia";
import { usePaymentsStore } from '../stores/payments.ts'

export default {
  name: "PaymentSplitter",
  setup() {
    const paymentsStore = usePaymentsStore()
    const { total } = storeToRefs(paymentsStore);
    return { total }
  }
};
</script>

<template>
  <div class="w-full bg-white px-4 py-2 border-b-2">
    <div class="flex justify-end">
      <div class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        {{ total }}
      </div>
    </div>
  </div>
</template>
  