import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'main': '2px 2px 4px -1px rgba(0, 0, 0, 0.1), -2px -2px 4px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
} satisfies Config;
