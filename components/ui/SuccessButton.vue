<script setup lang="ts">
    import BaseButton from "~/components/ui/BaseButton.vue";

    defineEmits(['click']);
</script>

<template>
    <BaseButton @click="$emit('click')" class="bg-green-400 hover:bg-green-500"><slot/></BaseButton>
</template>