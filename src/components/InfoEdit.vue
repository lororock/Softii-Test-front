<script lang="ts">
import { computed, ref } from 'vue';
import { storeToRefs } from "pinia";
import { usePaymentsStore } from '../stores/payments.ts'
export default {
    name: "PaymentSplitter",
    setup() {
        const paymentsStore = usePaymentsStore();
        const { tipoDePago, total } = storeToRefs(paymentsStore);
        const numeroPersonas = ref<number>(1);

        const seleccionarTipoDePago = (tipo: string) => {
            paymentsStore.tipoDePago = tipo;
        };



        const totalDividido = computed(() => {
            return numeroPersonas.value === 0 ? '0.00' : total.value / numeroPersonas.value;
        });

        return { seleccionarTipoDePago, tipoDePago, total, numeroPersonas, totalDividido };
    },
};
</script>

<template>
    <div class="w-full md:w-auto p-4 rounded-lg bg-gray-200">
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="mb-6 mx-auto sm:w-1/2 ">
                <label for="total-propinas" class="block text-red-500 font-semibold text-left mb-2">Total de
                    Propinas</label>
                <div class="flex items-center ">
                    <div class="flex items-center bg-red-100 bg-text-pink-100 rounded-md p-2">
                        <span class="ml-3 text-red-500">$</span>
                        <input
                            class="text-right form-input block w-full rounded-md bg-red-100 focus:outline-none focus:border-none text-red-500 pr-2"
                            type="text" id="total-propinas" :value="total" />
                    </div>
                    <span class="pl-2">@</span>
                </div>
            </div>
            <div class="mb-6">
                <label for="people" class="block text-center text-gray-700 font-semibold mb-2">¿Entre cuántos quieres
                    dividir las Propinas?</label>
                <div class="flex">
                    <input type="number" id="people" v-model="numeroPersonas"
                        class="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="#" />
                    <div class="flex-1  font-semibold flex justify-center items-center  text-red-500 ">
                        ${{ totalDividido }} x Persona</div>
                </div>
            </div>

            <div class="mb-6">
                <span class="text-gray-700 font-semibold">Elige el Método de Pago</span>
                <div class="grid grid-cols-2 gap-4 mt-4">
                    <button @click="seleccionarTipoDePago('Efectivo')" :class="{ 'bg-red-200': tipoDePago === 'Efectivo' }"
                        class="flex items-center justify-center p-4 border rounded-lg shadow-xl hover:shadow-sm hover:bg-red-200 transition-shadow duration-200">
                        <span>Efectivo</span>
                    </button>
                    <button @click="seleccionarTipoDePago('BBVA 1234')"
                        :class="{ 'bg-red-200': tipoDePago === 'BBVA 1234' }"
                        class="flex items-center justify-center p-4 border rounded-lg shadow-xl hover:shadow-sm hover:bg-red-200 transition-shadow duration-200">
                        <span>BBVA 1234</span>
                    </button>
                    <button @click="seleccionarTipoDePago('Santander 1234')"
                        :class="{ 'bg-red-200': tipoDePago === 'Santander 1234' }"
                        class="flex items-center justify-center p-4 border rounded-lg shadow-xl hover:shadow-sm hover:bg-red-200 transition-shadow duration-200">
                        <span>Santander 1234</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
