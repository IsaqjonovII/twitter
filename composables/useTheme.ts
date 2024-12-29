import {useDark} from "@vueuse/core";
import type {Theme} from "~/types";

export const useTheme = () => {
    const theme = useCookie<Theme>("theme");
    const isDark = useDark();

    const toggleTheme = () => {
        theme.value = theme.value === "dark" ? "light" : "dark";
    };

    return {
        theme,
        toggleTheme,
        isDark,
    };
};
