/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserPreferences = {
    dark?: boolean;
    transp?: boolean;
    bgImg?: string;
    is3d?: boolean;
    theme?: UserPreferences.theme;
    pieceSet?: UserPreferences.pieceSet;
    theme3d?: UserPreferences.theme3d;
    pieceSet3d?: UserPreferences.pieceSet3d;
    soundSet?: UserPreferences.soundSet;
    blindfold?: number;
    autoQueen?: number;
    autoThreefold?: number;
    takeback?: number;
    moretime?: number;
    clockTenths?: number;
    clockBar?: boolean;
    clockSound?: boolean;
    premove?: boolean;
    animation?: number;
    captured?: boolean;
    follow?: boolean;
    highlight?: boolean;
    destination?: boolean;
    coords?: number;
    replay?: number;
    challenge?: number;
    message?: number;
    coordColor?: number;
    submitMove?: number;
    confirmResign?: number;
    insightShare?: number;
    keyboardMove?: number;
    zen?: number;
    moveEvent?: number;
    rookCastle?: number;
}

export namespace UserPreferences {

    export enum theme {
        BLUE = 'blue',
        BLUE2 = 'blue2',
        BLUE3 = 'blue3',
        BLUE_MARBLE = 'blue-marble',
        CANVAS = 'canvas',
        WOOD = 'wood',
        WOOD2 = 'wood2',
        WOOD3 = 'wood3',
        WOOD4 = 'wood4',
        MAPLE = 'maple',
        MAPLE2 = 'maple2',
        BROWN = 'brown',
        LEATHER = 'leather',
        GREEN = 'green',
        MARBLE = 'marble',
        GREEN_PLASTIC = 'green-plastic',
        GREY = 'grey',
        METAL = 'metal',
        OLIVE = 'olive',
        NEWSPAPER = 'newspaper',
        PURPLE = 'purple',
        PURPLE_DIAG = 'purple-diag',
        PINK = 'pink',
        IC = 'ic',
    }

    export enum pieceSet {
        CBURNETT = 'cburnett',
        MERIDA = 'merida',
        ALPHA = 'alpha',
        PIROUETTI = 'pirouetti',
        CHESSNUT = 'chessnut',
        CHESS7 = 'chess7',
        REILLYCRAIG = 'reillycraig',
        COMPANION = 'companion',
        RIOHACHA = 'riohacha',
        KOSAL = 'kosal',
        LEIPZIG = 'leipzig',
        FANTASY = 'fantasy',
        SPATIAL = 'spatial',
        CALIFORNIA = 'california',
        PIXEL = 'pixel',
        MAESTRO = 'maestro',
        FRESCA = 'fresca',
        CARDINAL = 'cardinal',
        GIOCO = 'gioco',
        TATIANA = 'tatiana',
        STAUNTY = 'staunty',
        GOVERNOR = 'governor',
        DUBROVNY = 'dubrovny',
        ICPIECES = 'icpieces',
        SHAPES = 'shapes',
        LETTER = 'letter',
    }

    export enum theme3d {
        BLACK_WHITE_ALUMINIUM = 'Black-White-Aluminium',
        BRUSHED_ALUMINIUM = 'Brushed-Aluminium',
        CHINA_BLUE = 'China-Blue',
        CHINA_GREEN = 'China-Green',
        CHINA_GREY = 'China-Grey',
        CHINA_SCARLET = 'China-Scarlet',
        CLASSIC_BLUE = 'Classic-Blue',
        GOLD_SILVER = 'Gold-Silver',
        LIGHT_WOOD = 'Light-Wood',
        POWER_COATED = 'Power-Coated',
        ROSEWOOD = 'Rosewood',
        MARBLE = 'Marble',
        WAX = 'Wax',
        JADE = 'Jade',
        WOODI = 'Woodi',
    }

    export enum pieceSet3d {
        BASIC = 'Basic',
        WOOD = 'Wood',
        METAL = 'Metal',
        RED_VBLUE = 'RedVBlue',
        MODERN_JADE = 'ModernJade',
        MODERN_WOOD = 'ModernWood',
        GLASS = 'Glass',
        TRIMMED = 'Trimmed',
        EXPERIMENTAL = 'Experimental',
        STAUNTON = 'Staunton',
        CUBES_AND_PI = 'CubesAndPi',
    }

    export enum soundSet {
        SILENT = 'silent',
        STANDARD = 'standard',
        PIANO = 'piano',
        NES = 'nes',
        SFX = 'sfx',
        FUTURISTIC = 'futuristic',
        ROBOT = 'robot',
        MUSIC = 'music',
        SPEECH = 'speech',
    }


}