import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      hlg: { raw: "(min-height: 1024px)" },
      hxl: { raw: "(min-height: 1200px)" },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
