const favicon = `./static/logo-small.png`
const author = `Jake Warburton`
const siteUrl = `https://www.sleekweb.co.uk`
const description = `Web design and development services and portfolio based in Preston, UK. Website development with modern technology stacks with great SEO.`
const shortTitle = `Sleekweb`
const longTitle = `Sleekweb Web Design And Development`
const colour = `#212529`

module.exports = {
  siteMetadata: {
    title: shortTitle,
    description: description,
    author: author,
    siteUrl: siteUrl,
    favicon: favicon,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `data.sleekweb.co.uk`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: longTitle,
        short_name: shortTitle,
        start_url: `/`,
        background_color: colour,
        theme_color: colour,
        display: `standalone`,
        icon: favicon, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: favicon,

        // WebApp Manifest Configuration
        appName: shortTitle, // Inferred with your package.json
        appDescription: description,
        developerName: author,
        developerURL: siteUrl,
        dir: 'auto',
        lang: 'en-GB',
        background: colour,
        theme_color: colour,
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-113322702-1',
      },
    },
  ],
}
