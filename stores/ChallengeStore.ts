import {defineStore} from "pinia";
import Challenge from "~/stores/data/Challenge";

export const useChallengeStore = defineStore('challenge', () => {
    const all = Challenge.All;

    return {all};
});