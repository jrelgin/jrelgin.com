module.exports = {
  siteMetadata: {
    title: 'Hello. My name is Jason Elgin',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    'gatsby-transformer-remark',
  ],
}
