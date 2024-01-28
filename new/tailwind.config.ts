import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}"
  ],
  plugins: [require("daisyui")],
};
export default config;
