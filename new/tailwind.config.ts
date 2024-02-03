import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}"
  ],
  darkMode: ["class","[data-theme='dark']"],
  plugins: [require("daisyui")],
  daisyui: {
    theme: ["light", "dark"],
    darkTheme: "dark",
    logs: true
  }
};
export default config;
