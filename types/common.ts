export type TClassName =
    | string
    | string[]
    | Record<string, boolean>
    | Record<string, boolean>[];

export interface IDefaultResponse<T = unknown> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}

export enum EImageSize {
    ORIGINAL = "original",
    SMALL = "s100x100",
    MEDIUM = "s500x500",
    LARGE = "s1000x1000",
}

export type TImages = Record<EImageSize, string>;


export type TSelectOption = string | number | Record<string, string | number>;

export interface ISelect {
    modelValue?: TSelectOption;
    options: TSelectOption[];
    labelKey?: string;
    valueKey: string;
    placeholder?: string;
    selectedOptionStyles?: string;
    optionBorder: boolean;
    dark?: boolean;
    error?: boolean;
    disabled?: boolean;
}

