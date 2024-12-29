import type {ButtonVariants, Size} from "~/types/components";

export const buttonVariants: Record<ButtonVariants, string> = {
    primary: 'bg-primary',
    danger: 'bg-red ',
}

export const buttonRadius: Record<Size, string> = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-full"
}