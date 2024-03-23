// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    devtools: { enabled: false },
    css: ["@/assets/scss/global.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "@/assets/scss/_variables.scss"',
                },
            },
        },
    },
});
