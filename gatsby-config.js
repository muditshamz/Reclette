module.exports = {
  siteMetadata: {
    title: `iOS Reclette`,
    description: `The place for some amazing design techniques for Swift UI and indepth 
    hands-on experience on all the walkthroughs of the tutorials on 
    your system!`,
    author: `@DrasticChaser`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
