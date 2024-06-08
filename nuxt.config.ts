// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/nuxt",
    "@nuxtjs/supabase",
    "nuxt-icon",
    "@pinia/nuxt",
    "nuxt-lodash",
    "@nuxt/image",
  ],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
  supabase: {
    clientOptions: {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
      },
    },
  },
});
