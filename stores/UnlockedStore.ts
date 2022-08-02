import { defineStore } from 'pinia';
import {useLocalStorage} from "@vueuse/core";
import Character from "~/stores/data/Character";

export const useUnlockedStore = defineStore('unlocked', () => {
    const initialized = useLocalStorage('initialized', false);

    const unlockedCharacters = useLocalStorage('unlockedCharacters', [
        Character.Isaac.id
    ]);

    const finishedMarks = useLocalStorage('finishedMarks', {
        isaac: []
    });

    const finishedChallenges = useLocalStorage('finishedChallenges', []);

    function unlockCharacter(id: string): void {
        unlockedCharacters.value.push(id);
    }

    function finishMarks(characterId: string, marks: string[]): void {
        finishedMarks.value[characterId] ??= [];
        finishedMarks.value[characterId].push(...marks);
    }

    function finishChallenge(challengeId: number): void {
        finishedChallenges.value.push(challengeId);
    }

    function finishInit() {
        initialized.value = true;
    }

    return {
        initialized,
        finishInit,
        unlockedCharacters,
        unlockCharacter,
        finishedMarks,
        finishMarks,
        finishedChallenges,
        finishChallenge
    };
});