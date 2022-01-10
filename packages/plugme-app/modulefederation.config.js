const deps = require("./package.json").dependencies;

module.exports = {
  name: "app1",
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      eager:true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      eager:true,
      requiredVersion: deps["react-dom"],
    }
  },
};