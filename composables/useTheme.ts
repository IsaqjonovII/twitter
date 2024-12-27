import type {Theme} from "~/types";
import {useToggle, type UseToggleOptions} from "@vueuse/core";

export const useTheme = () => {
    const theme = useCookie<Theme>("theme");

    onMounted(() => {
        if (!theme.value) {
            theme.value = "dark";
        }
    });

    const toggleTheme = useToggle(theme, ["dark", "light"] as UseToggleOptions<string, string>);

    return {
        theme,
        toggleTheme,
    };
};
