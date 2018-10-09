const i18nConfig = require('./src/config/i18n.js');
const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Freesewing v2 demo",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "gatsby-transformer-remark",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, "src", "pages"),
        name: "pages",
        ignore: [`**/\.*`],
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
       		{
        	  resolve: `gatsby-remark-images`,
        	  options: {
        	    maxWidth: 650,
							showCaptions: true,
							linkImagesToOriginal: true,
							backgroundColor: '#212121',
        	  },
        	},
				]
      }
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: `src/config/typography`,
        omitGoogleFont: true
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: i18nConfig.defaultLanguage,
        useLangKeyLayout: false
      }
    },
    "gatsby-plugin-netlify",
  ]
};
