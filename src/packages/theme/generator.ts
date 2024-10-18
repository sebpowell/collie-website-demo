const fs = require("fs");
const path = require("path");

import { theme } from "./theme";

function generateCSSVariables(obj: object, prefix = "") {
  let cssVariables = "";

  for (const [key, value] of Object.entries(obj)) {
    let formattedKey = String(key).replace(".", "\\.");
    if (typeof value === "object" && value !== null) {
      cssVariables += generateCSSVariables(value, `${prefix}${formattedKey}-`);
    } else {
      cssVariables += `--${prefix}${formattedKey}: ${value};\n`;
    }
  }
  return cssVariables;
}
function generateTailwindVariables(obj: object, parentKey = "") {
  let tailwindVariables = "";
  let entries = Object.entries(obj);
  entries.forEach(([key, value], index) => {
    let newKey = parentKey ? `${parentKey}.${key}` : key;
    let finalKey = newKey.split(".").pop(); // remove prefix

    if (typeof value === "object" && value !== null) {
      tailwindVariables += `"${key}": {\n${generateTailwindVariables(
        value,
        newKey
      )}}`;
    } else {
      tailwindVariables += `"${finalKey}": "rgb(${value} / <alpha-value>)"`;
    }

    // Add comma if it's not the last entry
    if (index !== entries.length - 1) {
      tailwindVariables += ",\n";
    }
  });
  return tailwindVariables;
}
let cssVariables = generateCSSVariables(theme);
let tailwindVariables = generateTailwindVariables(theme.colors);

fs.writeFileSync(
  path.join(__dirname, "variables.css"),
  `:root {\n${cssVariables}}`
);

fs.writeFileSync(
  path.join(__dirname, "tailwind.js"),
  `module.exports = {\n${tailwindVariables}\n};`
);
