module.exports = {
  siteMetadata: {
    title: `Pizza Hut GATSBY`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-layout",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`pl`, `en`],
        defaultLanguage: `pl`,
        siteUrl: `http://localhost:8000/`,
      },
    },
    {
      resolve: "gatsby-plugin-translate-urls",
      options: {
        translations: {
          // import JS or JSON files
          en: require("./locales/en/translation.json"),
          pl: require("./locales/pl/translation.json"),
        },
        // OPTIONAL
        // To remove the default locale from urls
        defaultLocale: "pl",
        // prefix in translations files
        prefix: "urls.", // default: ""
      },
    },
  ],
};
