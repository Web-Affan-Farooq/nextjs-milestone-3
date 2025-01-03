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
        purple:"var(--purple-color)",
        orange:"var(--orange-color)",
        peach:"var(--peach-color)"
      },
      fontFamily: {
        oswald:"var(--font-oswald)",
        roboto:"var(--font-roboto)",
      },
      backgroundColor: {
        purple:"var(--purple-color)",
        orange:"var(--orange-color)",
        peach:"var(--peach-color)"
      }
    },
  },
  plugins: [],
} satisfies Config;
