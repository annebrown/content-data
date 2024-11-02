export default defineNuxtConfig({

    devtools: { enabled: true },
  
    modules: [
        '@nuxt/content', 
        '@nuxt/image', 
        '@nuxtjs/mdc', 
        '@nuxt/ui',
        '@nuxtjs/tailwindcss', 
        '@nuxtjs/color-mode',
  
    ],

    srcDir: 'src/',

    content: {
        documentDriven: true,
        ignores: ['^\\.', '^-', '^[0-5]\\d*\\.']
    },
      
      
      nitro: {
        prerender: {
          crawlLinks: true,
          failOnError: false,
        },
      },
    compatibilityDate: '2024-09-28',

    colorMode: {
        preference: 'dark', // default value of $colorMode.preference
    },
    components: true,
        
  })
  

