module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      "@babel/plugin-transform-runtime",
      [
        "module-resolver",
        "babel-plugin-module-resolver",
        {
          root: ["./src"],
          alias: {
            "~": "./src"
          }
        }
      ]
    ]
  };
  