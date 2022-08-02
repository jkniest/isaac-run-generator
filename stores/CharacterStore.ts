import {defineStore} from "pinia";
import Character from "~/stores/data/Character";
import CompletionMark from "~/stores/data/CompletionMark";

export const useCharacterStore = defineStore('character', () => {
    const all = Character.All;
    const allCompletionMarks = CompletionMark.ALL;

    function getCharacterById(id: string): Character|null {
        return all.find(character => character.id === id);
    }

    return {all, allCompletionMarks, getCharacterById};
});