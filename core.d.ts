declare const global: any;
declare namespace Tornador {
    export type Size = { width: number, height: number };
    export type Rect = Size;
    export type ShadowOpts = {
        shadowColor: string;
        shadowOpacity: number;
        shadowRadius: number;
        shadowOffset: { width: number, height: number };
    }
    export type LayoutMeasurements = {
        x: number;
        y: number;
        width: number;
        height: number;
        pageX: number;
        pageY: number;
    }
}
declare const font: (fontsize: number) => number;
declare const ft: (v: number) => number;
declare const fth: (v: number) => number;
declare const pixel: (dp: number) => number;
declare const di: (...args) => void;
declare const dw: (...args) => void;
declare const de: (...args) => void;
declare const ww: number;
declare const wh: number;
declare const os: "ios" | "android" | "windows" | "macos" | "web";
declare const select: (object: any) => any;
declare const isAndroid: boolean;
declare const isIos: boolean;
declare const isMac: boolean;
declare const isWeb: boolean;
declare const isWin: boolean;

type TypeKind = 'string' | 'function' | 'null' | 'undefined' | 'number';
declare const isType: (target: any, type: TypeKind) => boolean;
declare const isNil: (target: any) => boolean;

declare const times: {
    /**
     * YYYY | yyyy  =>  2021
     * MM  =>  month, 12
     * DD  =>  day, 16
     * HH  =>  hour, 18
     * mm  =>  minute, 52
     * ss  =>  second, 02
     */
    formatDate: (date: Date, fmt: string) => string;
}