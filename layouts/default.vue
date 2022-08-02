<script lang="ts" setup>
    import '../assets/css/tailwind.css';

    function reset() {
        const shouldReset = confirm('Really?');
        if (shouldReset) {
            localStorage.clear();
            location.reload();
        }
    }
</script>

<template>
    <div class="bg-gray-800 min-h-screen">
        <div class="container mx-auto p-4 md:p-12 pt-10 md:pt-16">
            <h1 class="text-3xl md:text-5xl text-center text-red-200">Run Generator</h1>

            <div class="bg-gray-100 mt-10 md:mt-20 p-6 md:p-8 rounded-lg shadow-md">
                <slot />
            </div>
            <a href="#" class="block text-white text-xs text-right mr-2 underline mt-3" @click="reset">
                Reset
            </a>
        </div>
    </div>
</template>