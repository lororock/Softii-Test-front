<script setup lang="ts">
import InfoEdit from "../components/InfoEdit.vue";
import PaymentKeyboard from "../components/PaymentKeyboard.vue";
import PaymentsList from "../components/PaymentsList.vue";
import FullPayment from "../components/FullPayment.vue";
import FullCash from "../components/FullCash.vue";
</script>

<template>
  <div>
    <FullCash />
  </div>
  <div class="flex flex-wrap justify-center items-stretch gap-4 lg:gap-8">
    <div class="flex-grow flex-shrink-0 flex-basis-0 w-full md:w-auto p-4 rounded-lg">
      <InfoEdit />
    </div>
    <div class="flex-grow flex-shrink-0 flex-basis-0 w-full md:w-auto p-4 rounded-lg">
      <PaymentKeyboard />
    </div>
    <div class="flex-grow flex-shrink-0 flex-basis-0 w-full md:w-auto p-4 rounded-lg">
      <PaymentsList />
    </div>
  </div>
  <div>
    <FullPayment />
  </div>
</template>
