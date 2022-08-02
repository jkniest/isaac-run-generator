export default class Character {
    public static Isaac: Character = new Character('isaac', 'Isaac');
    public static Magdalene: Character = new Character('magdalene', 'Magdalene');
    public static Cain: Character = new Character('cain', 'Cain');
    public static Judas: Character = new Character('judas', 'Judas');
    public static BlueBaby: Character = new Character('???', '???');
    public static Eve: Character = new Character('eve', 'Eve');
    public static Samson: Character = new Character('samson', 'Samson');
    public static Azazel: Character = new Character('azazel', 'Azazel');
    public static Lazarus: Character = new Character('lazarus', 'Lazarus');
    public static Eden: Character = new Character('eden', 'Eden');
    public static Lost: Character = new Character('lost', 'The Lost');
    public static Lilith: Character = new Character('lilith', 'Lilith');
    public static Apollyon: Character = new Character('apollyon', 'Apollyon');
    public static Forgotten: Character = new Character('forgotten', 'The Forgotten');
    public static Bethany: Character = new Character('bethany', 'Bethany');
    public static JacobEsau: Character = new Character('jacobesau', 'Jacob & Esau');
    public static Keeper: Character = new Character('keeper', 'Keeper');

    public static TaintedIsaac: Character = new Character('tainted_isaac', 'Isaac', true);
    public static TaintedMagdalene: Character = new Character('tainted_magdalene', 'Magdalene', true);
    public static TaintedCain: Character = new Character('tainted_cain', 'Cain', true);
    public static TaintedJudas: Character = new Character('tainted_judas', 'Judas', true);
    public static TaintedBlueBaby: Character = new Character('tainted_???', '???', true);
    public static TaintedEve: Character = new Character('tainted_eve', 'Eve', true);
    public static TaintedSamson: Character = new Character('tainted_samson', 'Samson', true);
    public static TaintedAzazel: Character = new Character('tainted_azazel', 'Azazel', true);
    public static TaintedLazarus: Character = new Character('tainted_lazarus', 'Lazarus', true);
    public static TaintedEden: Character = new Character('tainted_eden', 'Eden', true);
    public static TaintedLost: Character = new Character('tainted_lost', 'The Lost', true);
    public static TaintedLilith: Character = new Character('tainted_lilith', 'Lilith', true);
    public static TaintedApollyon: Character = new Character('tainted_apollyon', 'Apollyon', true);
    public static TaintedForgotten: Character = new Character('tainted_forgotten', 'The Forgotten', true);
    public static TaintedBethany: Character = new Character('tainted_bethany', 'Bethany', true);
    public static TaintedJacobEsau: Character = new Character('tainted_jacobesau', 'Jacob & Esau', true);
    public static TaintedKeeper: Character = new Character('tainted_keeper', 'Keeper', true);

    public static All: Character[] = [
        Character.Isaac,
        Character.Magdalene,
        Character.Cain,
        Character.Judas,
        Character.BlueBaby,
        Character.Eve,
        Character.Samson,
        Character.Azazel,
        Character.Lazarus,
        Character.Eden,
        Character.Lost,
        Character.Lilith,
        Character.Apollyon,
        Character.Forgotten,
        Character.Bethany,
        Character.JacobEsau,
        Character.Keeper,

        Character.TaintedIsaac,
        Character.TaintedMagdalene,
        Character.TaintedCain,
        Character.TaintedJudas,
        Character.TaintedBlueBaby,
        Character.TaintedEve,
        Character.TaintedSamson,
        Character.TaintedAzazel,
        Character.TaintedLazarus,
        Character.TaintedEden,
        Character.TaintedLost,
        Character.TaintedLilith,
        Character.TaintedApollyon,
        Character.TaintedForgotten,
        Character.TaintedBethany,
        Character.TaintedJacobEsau,
        Character.TaintedKeeper,
    ];

    public readonly id: string;
    public readonly name: string;
    public readonly tainted: boolean;

    public constructor(id: string, name: string, tainted: boolean = false) {
        this.id = id;
        this.name = name;
        this.tainted = tainted;
    }
}