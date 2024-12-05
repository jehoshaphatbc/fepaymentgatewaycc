<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-700">
        <div class="text-4xl font-bold mb-4">Transaction Failed!</div>
        <p class="text-lg mb-6">Oops! Something went wrong. Please try again later.</p>
        <button
            @click="goHome"
            class="mt-4 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
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
