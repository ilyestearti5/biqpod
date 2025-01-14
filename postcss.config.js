const postcssPresetEnv = require("postcss-preset-env");
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    postcssPresetEnv({
      stage: 1,
    }),
  ],
};
