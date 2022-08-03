<script setup lang="ts">
    import BaseButton from "~/components/ui/BaseButton.vue";

    defineEmits(['click']);
</script>

<template>
    <BaseButton class="bg-red-400 hover:bg-red-500" @click="$emit('click')"><slot /></BaseButton>
</template>
