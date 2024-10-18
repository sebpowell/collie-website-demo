import type { Config } from "tailwindcss";
import { withTV } from "tailwind-variants/transformer";
import { space, fontSize, theme, zIndex } from "./src/packages/theme/theme";
import colors from "./src/packages/theme/tailwind";

const config: Config = withTV({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/packages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    fontFamily: {
      body: ["var(--font-sans), sans-serif"],
    },
    fontSize,
    space: {
      ...theme.space,
    },
    spacing: {
      ...theme.space,
      // gutter: "4rem",
    },
    zIndex,
    extend: {
      colors,
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: (theme) => ({
        card: "0 0 0 1px rgba(17,24,28,.08),0 1px 2px -1px rgba(17,24,28,.08),0 2px 4px rgba(17,24,28,.04)!important",
        panel: "rgba(62, 62, 62, 0.04) 0px -2.4px 0px 0px inset, rgba(143, 143, 143, 0.2) 0px 1px 3px 0px, rgb(235, 235, 235) 0px 0px 0px 1px",
        "panel-hover": "rgba(62, 62, 62, 0.04) 0px 0px 0px 0px inset, rgba(143, 143, 143, 0.2) 0px 1px 3px 0px, rgb(235, 235, 235) 0px 0px 0px 1px"
      }),
      height: (theme) => ({
        "input-sm": theme.theme("space.8"),
        "input-default": theme.theme("space.10"),
        "input-lg": theme.theme("space.12"),
      }),
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: (theme) => ({
        "gradient-center": `linear-gradient(90deg,rgba(0,0,0,0),rgba(0,0,0,.1) 50%,rgba(0,0,0,0))`,
        "gradient-right": `linear-gradient(90deg,rgba(0,0,0,0), rgba(0,0,0,.1))`,
        "gradient-left": `linear-gradient(90deg,rgba(0,0,0,.1), rgba(0,0,0,0))`,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        button: `linear-gradient(0deg, rgba(142,206,170, 1), black)`,
      }),
    },
  },
  plugins: [],
});

export default config;
