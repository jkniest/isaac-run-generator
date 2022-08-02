export default class CompletionMark {
    public static BlueBaby: CompletionMark = new CompletionMark('???', '???');
    public static Lamb: CompletionMark = new CompletionMark('lamb', 'The Lamb');
    public static MegaSatan: CompletionMark = new CompletionMark('megasatan', 'Mega Satan');
    public static BossRush: CompletionMark = new CompletionMark('bossrush', 'Boss Rush');
    public static Hush: CompletionMark = new CompletionMark('hush', 'Hush');
    public static UltraGreed: CompletionMark = new CompletionMark('ultragreed', 'Ultra Greed');
    public static Delirium: CompletionMark = new CompletionMark('delirium', 'Delirium');
    public static Mother: CompletionMark = new CompletionMark('mother', 'Mother');
    public static Beast: CompletionMark = new CompletionMark('beast', 'The Beast');

    public static ALL: CompletionMark[] = [
        CompletionMark.BlueBaby,
        CompletionMark.Lamb,
        CompletionMark.MegaSatan,
        CompletionMark.BossRush,
        CompletionMark.Hush,
        CompletionMark.UltraGreed,
        CompletionMark.Delirium,
        CompletionMark.Mother,
        CompletionMark.Beast,
    ];

    public readonly id: string;
    public readonly name: string;

    public constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}