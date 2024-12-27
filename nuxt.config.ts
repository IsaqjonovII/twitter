export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',

    ssr: true,

    modules: [
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    'defineStore',
                ],
            },
        ],
        '@nuxt/image',
        '@vueuse/nuxt',
    ],

    nitro: {
        serveStatic: true,
        compressPublicAssets: true,
    },

    build: {
        transpile: ['vue-toastification'],
    },

    css: ['~/assets/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            ...(process.env.NODE_ENV === 'production' ? {cssnano: {}} : {})
        },
    },
})
