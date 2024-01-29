import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}"
  ],
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "dark",
  }
};
export default config;
