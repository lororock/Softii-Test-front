<script setup lang="ts">
import InfoEdit from './InfoEdit.vue';
import TabletRegister from './TabletRegister.vue';
import PaymentsList from './PaymentsList.vue'
</script>

<template>
  <div class="flex flex-wrap justify-center items-stretch gap-4 lg:gap-8">
    <div class="flex-grow flex-shrink-0 flex-basis-0 w-full md:w-auto p-4 rounded-lg bg-gray-200">
      <InfoEdit />
    </div>
    <div class="flex-grow flex-shrink-0 flex-basis-0 w-full md:w-auto p-4 rounded-lg bg-gray-200">
      <TabletRegister />
    </div>
    <div class="flex-grow flex-shrink-0 flex-basis-0 w-full md:w-auto p-4 rounded-lg bg-gray-200">
      <PaymentsList />
    </div>
  </div>
</template>
