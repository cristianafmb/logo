const myCustomQueries = {
  xs: "(max-width: 320px)",
  mobile: "(max-width: 768px)",
  md: "(max-width: 1025px)",
  l: "(max-width: 1536px)",
  xl: "(min-width: 1536px)",
  portrait: "(orientation: portrait)",
  tablet: "(max-width: 1149px)",
  custom: "(min-width: 1150px)",
  customLarge: "(min-width: 2550px)"
}


module.exports = {
  siteMetadata: {
    title: `Upcare`,
    description: `A Upcare Medical Center é uma clínica multidisciplinar que proporciona novos tratamentos na área da saúde. Contamos com uma equipa de profissionais de excelência que têm como principal preocupação o bem estar individual de cada paciente.`,
    author: `Invisual Branding Solutions`,
    siteUrl: `https://upcare.pt`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WMNPVDQ",
        includeInDevelopment: false,
        defaultDataLayer: {
          platform: "gatsby"
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
          trackingIds: ["UA-219239730-1"],
          gtagConfig: {
              anonymize_ip: true,
              cookie_expires: 0,
          },
          pluginConfig: {
              head: true,
              respectDNT: true,
              exclude: ["/404/**"],
          },
      },
  },
    "gatsby-plugin-htaccess",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
