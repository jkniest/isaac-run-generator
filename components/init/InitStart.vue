<script setup lang="ts">
    import {useCharacterStore} from "~/stores/CharacterStore";
    import {ref} from "@vue/reactivity";
    import CharacterUnlock from "~/components/init/CharacterUnlock.vue";
    import ChallengeUnlock from "~/components/init/ChallengeUnlock.vue";
    import {useChallengeStore} from "~/stores/ChallengeStore";
    import {useUnlockedStore} from "~/stores/UnlockedStore";

    const emit = defineEmits(['done']);

    const characterStore = useCharacterStore();
    const challengeStore = useChallengeStore();

    const currentCharacter = ref(33);
    const currentChallenge = ref(44);

    const nextCharacter = () => {
        currentCharacter.value++;
    };

    const nextChallenge = () => {
        currentChallenge.value++;

        if (currentChallenge.value >= challengeStore.all.length) {
            useUnlockedStore().finishInit();
            emit('done');
        }
    };
</script>

<template>
    <h2 class="text-center text-2xl md:text-3xl">Initialize</h2>

    <CharacterUnlock v-if="currentCharacter < characterStore.all.length"
                     :character="characterStore.all[currentCharacter]"
                     @done="nextCharacter"
                     :key="characterStore.all[currentCharacter].id"
                     :skip-unlock="currentCharacter === 0"
    />

    <ChallengeUnlock v-else
                     :challenge="challengeStore.all[currentChallenge]"
                     @done="nextChallenge"
                     :key="challengeStore.all[currentChallenge].id"
     />
</template>