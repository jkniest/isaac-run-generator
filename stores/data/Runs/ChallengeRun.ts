import Run from "~/stores/data/Runs/Run";
import Character from "~/stores/data/Character";
import CompletionMark from "~/stores/data/CompletionMark";
import Challenge from "~/stores/data/Challenge";
import {useUnlockedStore} from "~/stores/UnlockedStore";

export default class ChallengeRun extends Run {
    public readonly challenge: Challenge;

    public constructor(challenge: Challenge) {
        super();

        this.challenge = challenge;
    }

    public afterFinish(): void {
        useUnlockedStore().finishChallenge(this.challenge.id);
    }

    public getLabel(): string {
        return `Challenge #${this.challenge.id} (${this.challenge.name})`;
    }

}