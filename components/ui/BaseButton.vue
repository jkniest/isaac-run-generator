<script setup lang="ts">
    defineEmits(['click']);
</script>

<template>
    <button class="w-full py-6 flex-1 rounded-lg" @click="$emit('click')">
        <slot />
    </button>
</template>