<template>
    <div>
        <Head>
            <Title>Deposit</Title>
        </Head>
        <section class="bg-white py-8 antialiased dark:bg-gray-900 flex items-center h-screen justify-center">
            <div class="max-w-7xl w-full">
                <h2 class="text-center text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Deposit</h2>

                <div class="mt-6 sm:mt-8 flex justify-center">
                    <form @submit.prevent="submitForm" class="max-w-lg w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-8">
                        <div class="mb-6 grid grid-cols-1 gap-4">
                            <div>
                                <label for="order-id" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Order ID <span class="text-red-500">*</span></label>
                                <input v-bind="orderIdAttrs" type="text" id="orderId" v-model="orderId" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="12345" />
                                <div class="text-red-500 text-xs mt-2">{{ errors.orderId }}</div>
                            </div>

                            <div>
                                <label for="amount" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Amount <span class="text-red-500">*</span></label>
                                <input v-bind="amountAttrs" type="text" id="amount" v-model="amount" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Rp 1000" />
                                <div class="text-red-500 text-xs mt-2">{{ errors.amount }}</div>
                            </div>
                        </div>

                        <button type="submit" :disabled="isLoading" class="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed">
                            <span v-if="isLoading" class="loader mr-2"></span>
                            <span v-if="!isLoading">Pay now</span>
                            <span v-else>Processing...</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from "vue-router";
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { errors, handleSubmit, defineField } = useForm({
    validationSchema: yup.object({
        orderId: yup.string().required(),
        amount: yup.number().required(),
    }),
});

const router = useRouter();
const route = useRoute();
const config = useRuntimeConfig();
const isLoading = ref(false);
const [orderId, orderIdAttrs] = defineField('orderId');
const [amount, amountAttrs] = defineField('amount');

onMounted(() => {
    if (route.query.orderId) {
        orderId.value = route.query.orderId;
    }
    if (route.query.amount) {
        amount.value = route.query.amount;
    }
});

const submitForm = handleSubmit(async (values) => {
    isLoading.value = true;

    try {
        const token = config.public.TOKEN;

        const response = await axios.post(config.public.BACKEND_API+'/deposit', {
            order_id: orderId.value,
            amount: amount.value,
            created_at: new Date().toISOString(),
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.status === 201 && response.data.status === 'success') {
            router.push({ path: '/success' })
        }
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    } finally {
        isLoading.value = false;
    }
});
</script>