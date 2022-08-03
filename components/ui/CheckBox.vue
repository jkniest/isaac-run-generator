<script setup lang="ts">
    import {computed} from "@vue/reactivity";

    const props = defineProps({
        'id': {
            type: String,
            required: true
        },
        'modelValue': {
            type: Boolean
        }
    });

    const emit = defineEmits(['update:modelValue']);

    const value = computed({
        get: () => props.modelValue,
        set: (val) => emit('update:modelValue', val)
    });
</script>

<template>
    <div class="flex items-center space-x-3">
        <input type="checkbox" :id="id" class="w-5 h-5" v-model="value"> <!-- v-model="unlockedMarks[mark.id]" -->
        <label :for="id"><slot /></label>
    </div>
</template>