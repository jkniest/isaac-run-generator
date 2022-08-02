<script setup lang="ts">
    import UnlockChoice from "~/components/init/UnlockChoice";
    import Character from "~/stores/data/Character";
    import {useUnlockedStore} from "~/stores/UnlockedStore";
    import {computed, ref} from "@vue/reactivity";
    import {useCharacterStore} from "~/stores/CharacterStore";
    import Challenge from "~/stores/data/Challenge";

    const props = defineProps({
        challenge: Challenge,
    });

    const emit = defineEmits(['done']);

    const unlockedStore = useUnlockedStore();

    const yes = () => {
        unlockedStore.finishChallenge(props.challenge.id);
        emit('done');
    };

    const no = () => {
        emit('done');
    };

    const label = computed(() => {
        return `Challenge #${props.challenge.id} (${props.challenge.name})`;
    });
</script>

<template>
    <UnlockChoice :label="label" @yes="yes" @no="no" />
</template>
