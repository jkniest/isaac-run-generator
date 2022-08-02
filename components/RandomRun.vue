<script setup lang="ts">
    import {ref} from "@vue/reactivity";
    import {useUnlockedStore} from "~/stores/UnlockedStore";
    import {useCharacterStore} from "~/stores/CharacterStore";
    import Run from "~/stores/data/Runs/Run";
    import CharacterRun from "~/stores/data/Runs/CharacterRun";
    import {useChallengeStore} from "~/stores/ChallengeStore";
    import ChallengeRun from "~/stores/data/Runs/ChallengeRun";
    import DailyRun from "~/stores/data/Runs/DailyRun";

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
    <div v-if="selectedRun" class="text-center text-blue-900 pb-8">
        <h2 class="text-2xl md:text-3xl" v-text="selectedRun.getLabel()"/>
        <p class="text-xs mt-3">Found {{possibleRuns.length}} possible runs.</p>
    </div>

    <div class="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
        <button v-if="selectedRun" class="bg-green-400 hover:bg-green-500 w-full py-6 flex-1 rounded-lg" @click="complete">
            Mark as complete
        </button>
        <button class="bg-blue-400 hover:bg-blue-500 py-6 flex-1 rounded-lg w-full" @click="generate">
            Generate random run
        </button>
    </div>
</template>