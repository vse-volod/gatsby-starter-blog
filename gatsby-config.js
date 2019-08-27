module.exports = {
  siteMetadata: {
    title: 'Massively \n Gatsby theme usage example',
    author: 'Vsevolod & HTML5 UP',
    description: '',
    siteUrl: 'https://gatsbytemplates.io/',
    social: {
      twitter: 'http://twitter.com/',
      facebook: 'http://facebook.com/',
      snapchat: 'http://snapchat.com/',
      instagram: 'http://instagram.com/',
      medium: 'http://medium.com/'
    },
    menuLinks: [
      {
        "name": "home",
        "link": "/"
      },
      {
        "name": "about",
        "link": "/about"
      }
    ],
    contact: {
      info: 'This is information about you',
      email: 'information@untitled.tld',
      tel: '(000) 000-0000',
      address: '1234 Somewhere Road Nashville, TN 00000-0000'
    }
  },
  pathPrefix: "/massively-demo",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-theme-massively`, options: {}
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
