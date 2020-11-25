module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Geological Events | NASA API`,
        short_name: `GeologicalEvents`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: "src/images/favicon.png",
        cache_busting_mode: "none",
      },
    },
  ],
}
