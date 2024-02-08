import { defineStore } from "pinia";
interface Pago {
  paymentType: string;
  value: number;
  id: number;
}
export const usePaymentsStore = defineStore("payments", {
  state: () => ({
    total: 0,
    totalPagado: 0,
    tipoDePago: "",
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
        this.totalPagado += value;
      } catch (error) {
        console.error("Hubo un error al enviar el pago:", error);
      }
    },
    async eliminarPago(id: number) {
      try {
        const url = `http://localhost:5000/propinas/eliminar${id}`;
        const response = await fetch(url, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        this.pagosList = data.pagos;
      } catch (error) {
        console.error("Hubo un error al eliminar el pago:", error);
      }
    },
  },
});
