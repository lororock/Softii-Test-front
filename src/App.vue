<script lang="ts">
import { ref, onMounted } from 'vue'
import PaymentApp from './layout/PaymentApp.vue'

export default {
  components: {
    PaymentApp
  },
  setup() {
    const loaded = ref(false)

    onMounted(async () => {
      try {
        const response = await fetch('http://localhost:5000/efectivo-caja')

        if (response.ok) {
          const data = await response.json();
          const efectivoCaja = data.efectivoCaja;
          console.log(efectivoCaja);
          loaded.value = true

        } else {
          console.error('Error al cargar datos desde el servidor:', response.statusText)
        }
      } catch (error) {
        console.error('Error al realizar la solicitud al servidor:', error)
      }
    })

    return { loaded }
  }
}
</script>

<template>
  <PaymentApp />
</template>
