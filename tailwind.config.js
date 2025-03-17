import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui", // Prefijo para variables de tema
      addCommonColors: false, // No sobrescribir colores comunes (azul, verde, etc.)
      defaultTheme: "dark", // Tema por defecto
      defaultExtendTheme: "dark", // Extender a partir del tema claro
      layout: {}, // Tokens de diseño comunes
      themes: {
        light: {
          layout: {}, // Tokens de diseño para el tema claro
          colors: {}, // Colores para el tema claro
        },
        dark: {
          layout: {}, // Tokens de diseño para el tema oscuro
          colors: {}, // Colores para el tema oscuro
        },
      },
    }),
  ],
}

module.exports = config;