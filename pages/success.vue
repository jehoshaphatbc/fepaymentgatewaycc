<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-green-100 text-green-700">
        <div class="text-4xl font-bold mb-4">Transaction Successful!</div>
        <p class="text-lg mb-6">Thank you for your purchase. Your transaction was successful.</p>
        <button
            @click="goHome"
            class="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
        >
            Back to Home
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        goHome() {
        this.$router.push('/');
        },
    },
};
</script>
