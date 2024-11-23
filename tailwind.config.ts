import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/catalog/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        "15": "3.75rem",
        "18": "4.5rem",
        "192": "48rem"
      },
      boxShadow: {
        "master": "0 0 20px 0 rgba(0, 0, 0, 0.06);"
      },
      width: {
        "18": "4.5rem",
      },
      gap: {
        "3.5svw": "3.5svw",
        "1.5svw": "1.5svw",
      },
      fontSize: {
        "1rem": "1rem",
      },
      minWidth: {
        "3/12": "25%",
      },
      fontFamily: {
        "cera": ["Cera Pro", "sans-serif"]
      },
      textColor: {
        "green": "#46A358",
        "darkWhite": "#727272",
      },
      backgroundColor: {
        "green": "#46A358",
        "darkGreen": "rgb(70, 153, 88)",
        "alternate-white": "#fafafa",
      },
      borderColor: {
        "green": "rgb(70, 163, 88)",
        "greenop": "rgb(70, 163, 88, 0.5)",
        "btnWhite": "#e5e5e5",
      },
      padding: {
        "6.5": "27.5px"
      }
    },
  },
  plugins: [],
};
export default config;
