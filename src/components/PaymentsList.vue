<script lang="ts">
import { storeToRefs } from "pinia";
import { usePaymentsStore } from '../stores/payments.ts'

export default {
    name: "PaymentList",
    setup() {
        const paymentsStore = usePaymentsStore()
        const { pagosList } = storeToRefs(paymentsStore);
        const eliminarPago = paymentsStore.eliminarPago;

        return { pagosList, eliminarPago };
    },

    methods: {
        // Aquí puedes añadir los métodos del componente
    },
};
</script>
<template>
    <div class="flex items-center justify-between mb-3">
        <h2 class="text-lg font-semibold text-gray-700">Pagos</h2>
    </div>
    <div class="p-4 max-w-lg max-h-96 overflow-auto mx-auto bg-white rounded-lg shadow-md">
        <div v-if="pagosList.length >= 1" class="flex items-center justify-between p-3 mb-2 border-2 rounded-xl shadow-lg" v-for="payment in pagosList"
            :key="payment.id">
            <div class="flex items-center">
                <span class="text-sm font-medium text-gray-600">{{ payment.paymentType }}</span>
            </div>
            <div class="flex items-center">
                <div class="text-sm font-semibold text-gray-600 mr-2">${{ payment.value }}</div>
                <button class="text-red-500 hover:text-red-700" @click="eliminarPago(payment.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="20" height="20">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M18.37 5.63l-1.8-1.79L12 10.2 7.43 4.84l-1.8 1.79L10.2 12l-4.36 4.57 1.8 1.79L12 13.8l4.57 4.36 1.79-1.8L13.8 12z" />
                    </svg>
                </button>
            </div>
        </div>

        <div v-else class="flex items-center justify-between p-3 mb-2 border-2 rounded-xl shadow-lg">
            <div class="flex items-center">
                <span class="text-sm font-medium text-gray-600">NO HAY PAGOS</span>
            </div>
        </div>

    </div>
</template>