<script setup lang="ts">
    import BaseButton from "~/components/ui/BaseButton.vue";

    defineEmits(['click']);
</script>

<template>
    <BaseButton class="bg-blue-400 hover:bg-blue-500" @click="$emit('click')"><slot /></BaseButton>
</template>
