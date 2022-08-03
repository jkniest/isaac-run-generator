<script setup lang="ts">
    import ButtonGroup from "~/components/ui/ButtonGroup.vue";
    import SuccessButton from "~/components/ui/SuccessButton.vue";
    import DangerButton from "~/components/ui/DangerButton.vue";

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

        <ButtonGroup class="mt-6">
            <SuccessButton @click="$emit('yes')">Yes</SuccessButton>
            <DangerButton @click="$emit('no')">No</DangerButton>
        </ButtonGroup>
    </div>
</template>