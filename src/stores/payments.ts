import { defineStore } from "pinia";
interface Pago {
  paymentType: string;
  value: number;
  id: number;
}
export const usePaymentsStore = defineStore("payments", {
  state: () => ({
    total: 0,
    tipoDePago: '',
    pagosList: [{ paymentType: "st" }] as Pago[],
  }),
  actions: {
    async enviarPago(paymentType: string, value: number) {
      try {
        const response = await fetch("http://localhost:5000/propinas/pagos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentType,
            value,
          }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        this.pagosList = data.pagos;
      } catch (error) {
        console.error("Hubo un error al enviar el pago:", error);
      }
    },
    async eliminarPago(id: number) {
      try {
        const url = `http://localhost:5000/propinas/eliminar${id}`; // Asegúrate de que la URL sea correcta
        const response = await fetch(url, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Espera la respuesta del servidor
        this.pagosList = data.pagos;
        // Muestra el mensaje de éxito
        // Actualiza la UI o el estado según sea necesario
      } catch (error) {
        console.error("Hubo un error al eliminar el pago:", error);
        // Manejo de errores
      }
    },
  },
});
