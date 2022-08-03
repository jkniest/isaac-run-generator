<script setup lang="ts">
    import BaseButton from "~/components/ui/BaseButton.vue";

    defineEmits(['click']);
</script>

<template>
    <BaseButton class="bg-gray-200 hover:bg-gray-300" @click="$emit('click')"><slot /></BaseButton>
</template>