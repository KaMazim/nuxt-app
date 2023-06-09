// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Nuxt App',
            meta: [
                {
                    name: 'description',
                    content: 'E-commerce app built with Nuxt',
                },
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                },
            ],
        },
    },
    typescript: {
        strict: true,
        typeCheck: true,
    },
});
