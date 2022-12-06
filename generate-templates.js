// eslint-disable-next-line no-undef
const { generateTemplates } = require("swagger-typescript-api");
// eslint-disable-next-line no-undef
const path = require("path");

generateTemplates({
  cleanOutput: false,
  output: path.resolve("./src/templates"),
  httpClientType: "axios",
  modular: false,
  silent: false,
  rewrite: true,
})