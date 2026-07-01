import packageJson from "../../../package.json" with { type: "json" };

const packageConfig = {
  version: packageJson.version,
};

export default packageConfig;