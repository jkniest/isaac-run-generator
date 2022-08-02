export default abstract class Run {
    public abstract getLabel(): string;
    public abstract afterFinish(): void;
}