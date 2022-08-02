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
        '@kevinmarrec/nuxt-pwa'
    ],
    ssr: false,
    pwa: {
        manifest: {
            name: 'Isaac Runs',
            lang: 'en'
        }
    },
    head: {
        viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    }
})
