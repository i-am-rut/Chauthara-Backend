import express from "express";
import "dotenv/config";
import validateConfiguration from "./bootstrap/configuration/validateConfiguration.js";

validateConfiguration();

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});