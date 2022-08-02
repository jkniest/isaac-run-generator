<script setup lang="ts">
    defineProps({
        label: String,
        color: {
            type: String,
            default: 'text-black'
        }
    });

    defineEmits(['yes', 'no']);
</script>

<template>
    <div class="mt-8">
        <h3 class="text-center text-lg md:text-xl">Have you unlocked <span :class="color">{{label}}</span> yet?</h3>

        <div class="flex flex-col md:flex-row justify-around mt-6 md:w-[500px] mx-auto space-y-5 md:space-y-0 md:space-x-10">
            <button class="bg-green-300 hover:bg-green-400 py-6 w-full md:w-1/2 rounded-lg "
                    @click="$emit('yes')"
            >
                Yes
            </button>
            <button class="bg-red-300 hover:bg-red-400 py-6 w-full md:w-1/2 rounded-lg"
                    @click="$emit('no')"
            >
                No
            </button>
        </div>
    </div>
</template>