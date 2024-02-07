<script setup lang="ts">
import InfoEdit from './InfoEdit.vue';
import PaymentKeyboard from './PaymentKeyboard.vue';
import PaymentsList from './PaymentsList.vue'
</script>

<template>
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
</template>
