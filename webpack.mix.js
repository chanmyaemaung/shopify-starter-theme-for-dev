let mix = require("laravel-mix");

mix
  .js("src/js/cnjs.js", "assets")
  .sass("src/scss/cncss.scss", "assets")
  .options({
    processCssUrls: false,
    postCss: [require("tailwindcss")("./tailwind.config.js")],
  });
