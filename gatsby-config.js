/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
    {
    resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Advent Pro, Alegreya Sans SC'],
        },
      },
    },
    `gatsby-plugin-sass`,
  ],
   pathPrefix: "/LoopStudios"
}

