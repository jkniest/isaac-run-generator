import Run from "~/stores/data/Runs/Run";
import Character from "~/stores/data/Character";
import CompletionMark from "~/stores/data/CompletionMark";
import Challenge from "~/stores/data/Challenge";

export default class DailyRun extends Run {
    public afterFinish(): void {
    }

    public getLabel(): string {
        return 'Daily Challenge';
    }

}