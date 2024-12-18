import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          light: "#40B7E5",  // Light blue
          DEFAULT: "#0086C3", // Main blue
          dark: "#006494",   // Dark blue
        },
        secondary: {
          light: "#7CDB54",  // Light green
          DEFAULT: "#4CC328", // Main green
          dark: "#2E9517",   // Dark green
        },
        accent: "#E5F4FB",    // Very light blue for backgrounds
      },
    },
  },
  plugins: [],
}
export default config
