import Run from "~/stores/data/Runs/Run";
import Character from "~/stores/data/Character";
import CompletionMark from "~/stores/data/CompletionMark";
import {useUnlockedStore} from "~/stores/UnlockedStore";

export default class CharacterRun extends Run {
    public readonly character: Character;
    public readonly mark: CompletionMark;

    public constructor(character: Character, mark: CompletionMark) {
        super();

        this.character = character;
        this.mark = mark;
    }

    public afterFinish(): void {
        useUnlockedStore().finishMarks(this.character.id, [this.mark.id]);
    }

    public getLabel(): string {
        return `${this.character.name} to ${this.mark.name}`;
    }

}