import type {TClassName, TSelectOption} from "~/types/common";

export type ButtonVariants = "primary" | "danger"
export type Size = 'sm' | "md" | "lg" | "xl"

export interface InputProps {
    id: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    readonly?: boolean;
    maxlength?: number | string;
    minlength?: number | string;
    max?: number | string;
    min?: number | string;
    inputClass?: string | string[];
    autocomplete?: boolean;
}

export interface SelectProps {
    options: TSelectOption[];
    labelKey?: string;
    valueKey: string;
    placeholder?: string;
    direction?: "top" | "bottom";
    selectedOptionStyles?: string;
    optionStyles?: string;
    optionBorder?: boolean;
    dark?: boolean;
    error?: boolean;
    disabled?: boolean;
    hasPrefix?: boolean;
}


export interface CheckboxProps {
    label?: string;
    id?: string;
    name?: string;
    value?: string | number | boolean;
    disabled?: boolean;
    error?: boolean;
    labelStyles?: TClassName;
    checked?: boolean;
    partial?: boolean;
    checkboxStyles?: TClassName;
    infoIcon?: boolean;
    infoText?: string;
}

export type ModalProps = {
    title?: string;
    description?: string;
    noHeader?: boolean;
    noFooter?: boolean;
}

export type ButtonProps = {
    text: string;
    icon?: string;
    iconPosition?: "left" | "right"
    disabled?: boolean
    loading?: boolean;
    type: HTMLButtonElement['type']
    variant?: ButtonVariants
    radius?: Size
}

