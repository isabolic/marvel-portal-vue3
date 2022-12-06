// eslint-disable-next-line no-undef
const { generateApi } = require("swagger-typescript-api");
// eslint-disable-next-line no-undef
const path = require("path");

generateApi({
  name: "marvel-api.ts",
  // set to `false` to prevent the tool from writing to disk
  output: path.resolve("./src/api"),
  templates: path.resolve("./src/templates"),
  httpClientType: "axios",
  input: path.resolve("./swagger.json"),
}).catch((e) => console.error(e));
