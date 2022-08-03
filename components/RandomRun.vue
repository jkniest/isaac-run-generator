<script setup lang="ts">
    import {ref} from "@vue/reactivity";
    import {useUnlockedStore} from "~/stores/UnlockedStore";
    import {useCharacterStore} from "~/stores/CharacterStore";
    import Run from "~/stores/data/Runs/Run";
    import CharacterRun from "~/stores/data/Runs/CharacterRun";
    import {useChallengeStore} from "~/stores/ChallengeStore";
    import ChallengeRun from "~/stores/data/Runs/ChallengeRun";
    import DailyRun from "~/stores/data/Runs/DailyRun";
    import SuccessButton from "~/components/ui/SuccessButton.vue";
    import InfoButton from "~/components/ui/InfoButton.vue";
    import ButtonGroup from "~/components/ui/ButtonGroup.vue";

    const unlockedStore = useUnlockedStore();
    const characterStore = useCharacterStore();
    const challengeStore = useChallengeStore();

    const possibleRuns = ref([]);
    const selectedRun = ref(null);

    function generate() {
        const possible: Run[] = [];

        for (let character of unlockedStore.unlockedCharacters) {
            const finished = unlockedStore.finishedMarks[character];

            for (let mark of characterStore.allCompletionMarks) {
                if (finished.includes(mark.id)) {
                    continue;
                }

                const characterObject = characterStore.getCharacterById(character);
                if (!characterObject) {
                    continue;
                }

                possible.push(
                    new CharacterRun(characterObject, mark)
                );
            }
        }

        for (let challenge of challengeStore.all) {
            if (unlockedStore.finishedChallenges.includes(challenge.id)) {
                continue;
            }

            possible.push(new ChallengeRun(challenge));
        }

        possible.push(new DailyRun());

        possibleRuns.value = possible;
        selectedRun.value = possible[Math.floor(Math.random() * possible.length)];
    }

    function complete() {
        selectedRun.value.afterFinish();
        selectedRun.value = null;
    }
</script>

<template>
    <div v-auto-animate>
        <div v-if="selectedRun" class="text-center text-blue-900 pb-8">
            <h2 class="text-2xl md:text-3xl" v-text="selectedRun.getLabel()"/>
            <p class="text-xs mt-3">Found {{ possibleRuns.length }} possible runs.</p>
        </div>
    </div>

    <ButtonGroup>
        <SuccessButton v-if="selectedRun" @click="complete">Mark as complete</SuccessButton>
        <InfoButton @click="generate">Generate random run</InfoButton>
    </ButtonGroup>
</template>