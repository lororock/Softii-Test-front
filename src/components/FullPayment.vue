<script lang="ts">
import { computed } from 'vue';
import { storeToRefs } from "pinia";
import { usePaymentsStore } from '../stores/payments.ts'
export default {
    name: "FullPayment",
    setup() {
        const paymentsStore = usePaymentsStore();
        const { total, totalPagado, tipoDePago } = storeToRefs(paymentsStore);
        const enviarPago = paymentsStore.enviarPago;

        const totalDividido = computed(() => {
            return total.value - totalPagado.value
        });

        return { total, totalDividido, totalPagado, tipoDePago, enviarPago };
    },
};
</script>

<template>
    <div class="w-full bg-white px-4 py-2 shadow-md">
        <div class="flex justify-around items-center">
            <div class="flex flex-col justify-between w-48">
                <div class="flex justify-between items-center">
                    <span class="text-sm font-semibold text-red-500">Total Pagado</span>
                    <span class="text-lg font-bold text-red-500">${{ totalPagado }}</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-sm font-semibold text-gray-700">Restante por Pagar</span>
                    <span class="text-lg font-bold text-gray-800">${{ totalDividido }}</span>
                </div>
            </div>
            <button @click="enviarPago(tipoDePago, totalDividido)"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                :disabled="totalDividido <= 0 || tipoDePago == ''">
                Pagar ${{ totalDividido }} en Propinas
            </button>
        </div>
    </div>
</template>