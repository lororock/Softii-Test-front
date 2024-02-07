<script lang="ts">
//import { ref } from 'vue';

export default {
    name: "PaymentSplitter",
    data() {
        return {
            // Aquí puedes añadir las propiedades del componente
        };
    },
    setup() {
        // const display = ref('0');
        const payments = [{ id: 1, pago: 130, metodoPago: 'efectivo' }, { id: 2, pago: 130, metodoPago: 'bbva' }];

        // const onButtonClick = (button: string) => {
        //     // Aquí agregarás la lógica para manejar los clics en los botones
        //     console.log(button);
        // };

        return { payments };
    },
    methods: {
        // Aquí puedes añadir los métodos del componente
    },
};
</script>
<template>
    
    <div class="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-md" >
        <div class="flex items-center justify-between mb-3">
            <h2 class="text-lg font-semibold text-gray-700">Pagos</h2>
        </div>
        <div class="flex items-center justify-between p-3 mb-2 bg-gray-100 rounded" v-for="payment in payments " :key="payment.id">
            <div class="flex items-center">
                <span class="text-sm font-medium text-gray-600">{{payment.metodoPago}}</span>
            </div>
            <div class="text-sm font-semibold text-gray-600">$300.00</div>
            <button class="text-red-500 hover:text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm2-9a1 1 0 012 0v1a1 1 0 11-2 0V9zm-4 0a1 1 0 112 0v1a1 1 0 01-2 0V9zm-3 3a1 1 0 000 2h6a1 1 0 100-2H5z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>
</div></template>