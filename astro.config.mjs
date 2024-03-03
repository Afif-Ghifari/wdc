import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), react(), partytown()],
  server: {
    port: 5000
  }
  // output: "server",
  // adapter: vercel(),
  // site: 'https://Afif-Ghifari.github.io',
  // base: '/wdc',
  ,
});