import {defineStore} from "pinia";
import Challenge from "~/stores/data/Challenge";
import Character from "~/stores/data/Character";

export const useChallengeStore = defineStore('challenge', () => {
    const all = Challenge.All;

    function getChallengeById(id: number): Challenge|null {
        return all.find(challenge => challenge.id === id);
    }

    return {all, getChallengeById};
});