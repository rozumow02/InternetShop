// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "nuxt-swiper",
    "nuxt-lucide-icons",
    "@nuxt/ui",
  ],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "ru", name: "Rus", file: "ru.json" },
      { code: "tm", name: "Turkmen", file: "tm.json" },
    ],
    lazy: true,
    langDir: "locales/",
    defaultLocale: "ru",
    strategy: "prefix_and_default",
  },
  
  colorMode: {
    preference: "light"
  },
  // postcss: {
  //   plugins: {
  //     // 'postcss-color-gray': {}
  //   }
  // },
});
