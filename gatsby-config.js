const myCustomQueries = {
  xs: "(max-width: 320px)",
  mobile: "(max-width: 768px)",
  md: "(max-width: 1024px)",
  l: "(max-width: 1536px)",
  xl: "(min-width: 1536px)",
  portrait: "(orientation: portrait)",
}


module.exports = {
  siteMetadata: {
    title: `Upcare`,
    description: `A Upcare Medical Center é uma clínica multidisciplinar que proporciona novos tratamentos na área da saúde. Contamos com uma equipa de profissionais de excelência que têm como principal preocupação o bem estar individual de cada paciente.`,
    author: `Invisual Branding Solutions`,
    siteUrl: `https://upcare.pt`,
  },
  plugins: [
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
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
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
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
