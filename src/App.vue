<script lang="ts">
import { ref, onMounted } from 'vue'
import PaymentApp from './layout/PaymentApp.vue'

export default {
  components: {
    PaymentApp
  },
  setup() {
    const loaded = ref(false)

    // Realizar la solicitud HTTP al backend local
    onMounted(async () => {
      try {
        // Realiza la solicitud al backend
        // Aquí debes usar la URL correcta para tu backend local
        const response = await fetch('http://localhost:5000/efectivo-caja')
        // Verifica si la solicitud fue exitosa
        if (response.ok) {
          // Si la solicitud fue exitosa, marca el componente como cargado
          const data = await response.json();

          // Ahora puedes acceder al valor de la variable efectivoCaja desde el objeto data
          const efectivoCaja = data.efectivoCaja;
          console.log(efectivoCaja);
          loaded.value = true

        } else {
          // Si la solicitud no fue exitosa, maneja el error adecuadamente
          console.error('Error al cargar datos desde el servidor:', response.statusText)
        }
      } catch (error) {
        // Maneja los errores de red u otros errores
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
