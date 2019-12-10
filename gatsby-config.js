const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                "gatsby-remark-copy-linked-files",
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1280
                    }
                }
            ]
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `src`,
            path: `${__dirname}/src/`
        }
    },
    {
       resolve: `gatsby-source-graphql`,

       options: {
         // This type will contain remote schema Query type
         typeName: `WPGraphQL`,
         // This is field under which it's accessible
         fieldName: `wpgraphql`,
         // Url to query from
         //url: `http://lallathebuddha.com/graphql`,
        url: `http://41.185.8.137/~xic02/alchemyofremembrance/graphql`
       },
     },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
