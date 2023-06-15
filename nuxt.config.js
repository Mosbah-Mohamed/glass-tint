// Global page headers

export default {
  // for build

  target: "static",

  head() {
    const i18nHead = this.$nuxtI18nHead({
      addSeoAttributes: true,
      addDirAttribute: true,
    });
    return {
      htmlAttrs: {
        Developer: "Mosbah Mohamed",
        ...i18nHead.htmlAttrs,
      },
      head: {
        titleTemplate: "%s",
        title: "GlassTint", // the title you define. you must put your package-name here, if you want that name.
      },

      // %s refer to every title on page + global title

      titleTemplate: " %s - GlassTint",
      title: "GlassTint",

      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content: "My Custom Description",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },

        {
          hid: "og:title",
          name: "og:title",
          content: "My Custom Description",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "My Custom Description",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "My Custom Description",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `url`,
        },
        ...i18nHead.meta,
      ],

      // cdn link script
      // body true to put link at end of body tag

      // script: [
      //   {
      //     src: "",
      //     body: true,
      //   },
      // ],

      // cdn link css

      link: [
        {
          rel: "icon",
          href: "/Favicon.png",
        },
        {
          rel: "icon",
          href: "./Favicon.png",
        },
        {
          rel: "icon",
          href: "Favicon.png",
        },
        ...i18nHead.link,
      ],
    };
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
  devtools: true,
  dev: true,

  store: true,

  // Global CSS

  css: [
    "@/assets/scss/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  layoutTransition: {
    name: "fade",
    mode: "out-in",
  },

  pageTransition: {
    /*
        all animation:
         1- fade :good
         2- intro with it remove mode
         3- fade2
         4- page with it remove mode
         5- fadeOpacity : good
         6- page6 with it remove mode
         7- page7 :good with it remove mode

    */

    name: "intro",
    // mode: "out-in",
  },

  // Plugins to run before rendering page
  plugins: [
    "@/plugins/axios",
    "@/plugins/router",
    "@/plugins/api.js",
    { src: "@/plugins/vee-validate" },
    // for save state even if page reload very important
    { src: "@/plugins/aos", mode: "client" },
    { src: "~/plugins/vue-owl-carousel", mode: "client" },
  ],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // "nuxt-animejs",
  buildModules: ["@nuxtjs/fontawesome", "@nuxtjs/style-resources"],

  // Modules
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/axios",
    "nuxt-vue-multiselect",
    [
      "nuxt-sweetalert2",
      {
        // confirmButtonColor: '#FFFFFF'
      },
    ],
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true,
    },
  },

  i18n: {
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        dir: "ltr",
      },
      {
        name: "Arabic",
        code: "ar",
        iso: "ar-EG",
        file: "ar-Ar.js",
        dir: "rtl",
      },
    ],
    lazy: true,
    // skipSettingLocaleOnNavigate: true,
    // reloadOnLanguageChange: true,
    langDir: "static/",
    defaultLocale: "ar",
    strategy: "prefix_and_default",
    defaultDirection: "rtl",
    detectBrowserLanguage: false,
  },

  axios: {
    baseURL: "https://emary.azq1.com/GlassTint/dashboard/api/",
    retry: { retries: 3 },
    headers: {
      common: {
        "Content-Type": "application/json",
        "Acess-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    },
  },

  build: {
    transpile: ["vee-validate/dist/rules"],

    // for build folder path in cpanel

    publicPath: "https://emary.azq1.com/GlassTint/",
  },

  router: {
    base: "/GlassTint/",
    //for build path
  },
};
