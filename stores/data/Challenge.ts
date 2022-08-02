export default class Challenge {
    public static Challenge1 = new Challenge(1, 'Pitch Black');
    public static Challenge2 = new Challenge(2, 'High Brow');
    public static Challenge3 = new Challenge(3, 'Head Trauma');
    public static Challenge4 = new Challenge(4, 'Darkness Falls');
    public static Challenge5 = new Challenge(5, 'The Tank');
    public static Challenge6 = new Challenge(6, 'Solar System');
    public static Challenge7 = new Challenge(7, 'Suicide King');
    public static Challenge8 = new Challenge(8, 'Cat Got Your Tongue');
    public static Challenge9 = new Challenge(9, 'Demo Man');
    public static Challenge10 = new Challenge(10, 'Cursed!');
    public static Challenge11 = new Challenge(11, 'Glass Cannon');
    public static Challenge12 = new Challenge(12, 'When Life Gives You Lemons');
    public static Challenge13 = new Challenge(13, 'Beans!');
    public static Challenge14 = new Challenge(14, 'Its in the Cards');
    public static Challenge15 = new Challenge(15, 'Slow Roll');
    public static Challenge16 = new Challenge(16, 'Computer Savvy');
    public static Challenge17 = new Challenge(17, 'Waka Waka');
    public static Challenge18 = new Challenge(18, 'The Host');
    public static Challenge19 = new Challenge(19, 'The Family Man');
    public static Challenge20 = new Challenge(20, 'Purist');
    public static Challenge21 = new Challenge(21, 'XXXXXXXXL');
    public static Challenge22 = new Challenge(22, 'SPEED!');
    public static Challenge23 = new Challenge(23, 'Blue Bomber');
    public static Challenge24 = new Challenge(24, 'PAY TO PLAY');
    public static Challenge25 = new Challenge(25, 'Have a Heart');
    public static Challenge26 = new Challenge(26, 'I RULE!');
    public static Challenge27 = new Challenge(27, 'BRAINS!');
    public static Challenge28 = new Challenge(28, 'PRIDE DAY!');
    public static Challenge29 = new Challenge(29, 'Onans Streak');
    public static Challenge30 = new Challenge(30, 'The Guardian');
    public static Challenge31 = new Challenge(31, 'Backasswards');
    public static Challenge32 = new Challenge(32, 'Aprils Fool');
    public static Challenge33 = new Challenge(33, 'Pokey Mans');
    public static Challenge34 = new Challenge(34, 'Ultra Hard');
    public static Challenge35 = new Challenge(35, 'Pong');
    public static Challenge36 = new Challenge(36, 'Scat Man');
    public static Challenge37 = new Challenge(37, 'Bloody Mary');
    public static Challenge38 = new Challenge(38, 'Baptism by Fire');
    public static Challenge39 = new Challenge(39, 'Isaacs Awakening');
    public static Challenge40 = new Challenge(40, 'Seeing Double');
    public static Challenge41 = new Challenge(41, 'Pica Run');
    public static Challenge42 = new Challenge(42, 'Hot Potato');
    public static Challenge43 = new Challenge(43, 'Cantripped!');
    public static Challenge44 = new Challenge(44, 'Red Redemption');
    public static Challenge45 = new Challenge(45, 'DELETE THIS');

    public static All: Challenge[] = [
        Challenge.Challenge1,
        Challenge.Challenge2,
        Challenge.Challenge3,
        Challenge.Challenge4,
        Challenge.Challenge5,
        Challenge.Challenge6,
        Challenge.Challenge7,
        Challenge.Challenge8,
        Challenge.Challenge9,
        Challenge.Challenge10,
        Challenge.Challenge11,
        Challenge.Challenge12,
        Challenge.Challenge13,
        Challenge.Challenge14,
        Challenge.Challenge15,
        Challenge.Challenge16,
        Challenge.Challenge17,
        Challenge.Challenge18,
        Challenge.Challenge19,
        Challenge.Challenge20,
        Challenge.Challenge21,
        Challenge.Challenge22,
        Challenge.Challenge23,
        Challenge.Challenge24,
        Challenge.Challenge25,
        Challenge.Challenge26,
        Challenge.Challenge27,
        Challenge.Challenge28,
        Challenge.Challenge29,
        Challenge.Challenge30,
        Challenge.Challenge31,
        Challenge.Challenge32,
        Challenge.Challenge33,
        Challenge.Challenge34,
        Challenge.Challenge35,
        Challenge.Challenge36,
        Challenge.Challenge37,
        Challenge.Challenge38,
        Challenge.Challenge39,
        Challenge.Challenge40,
        Challenge.Challenge41,
        Challenge.Challenge42,
        Challenge.Challenge43,
        Challenge.Challenge44,
        Challenge.Challenge45,
    ];

    public readonly id: number;
    public readonly name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}