import config from "../../shared/configuration/index.js";

function validateConfiguration() {
  const requiredVariables = [
    {
      name: "MONGO_URI",
      value: config.database.mongoUri,
    },
    {
      name: "JWT_SECRET",
      value: config.auth.jwtSecret,
    },
  ];

  const missingVariables = requiredVariables.filter(
    (variable) => !variable.value,
  );

  if (missingVariables.length > 0) {
    console.error("✕ Missing required environment variables:\n");

    missingVariables.forEach((variable) => {
      console.error(`- ${variable.name}`);
    });

    process.exit(1);
  }

  console.log("✓ Environment Configuration validation passed");
}

export default validateConfiguration;
