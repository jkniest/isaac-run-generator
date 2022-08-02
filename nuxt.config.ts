import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        }
    },
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/pwa'
    ],
    ssr: false
})
