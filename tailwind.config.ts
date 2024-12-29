import type {Config} from "tailwindcss";

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    container: {
        center: true,
        padding: {
            DEFAULT: '1rem',
        },
        screens: ['1224px'],
    },
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1DA1F2', // Default Twitter blue (buttons, links)
                    hover: '#1A91DA', // Slightly darker blue (hover state)
                },
                gray: {
                    100: '#F5F8FA', // Light gray (background)
                    200: '#E1E8ED', // Very light gray (dividers, borders)
                    300: '#CCD6DD', // Light gray (secondary borders)
                    400: '#AAB8C2', // Medium gray (secondary text)
                    500: '#657786', // Default gray (primary text)
                    900: '#14171A', // Dark gray (dark mode text)
                },
                dark: '#10171E', // Darkest gray (dark mode background)
                red: "#ff0000",
            },
        },
    },
    plugins: [],
} satisfies Config;
