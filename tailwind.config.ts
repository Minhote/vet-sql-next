import type { Config } from "tailwindcss";

const config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    fontFamily: {
      heading: "Poppins",
      body: "Kanit",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    extend: {
      colors: {
        txt: {
          DEFAULT: "hsl(var(--text))",
          50: "hsl(var(--text-50))",
          100: "hsl(var(--text-100))",
          200: "hsl(var(--text-200))",
          300: "hsl(var(--text-300))",
          400: "hsl(var(--text-400))",
          500: "hsl(var(--text-500))",
          600: "hsl(var(--text-600))",
          700: "hsl(var(--text-700))",
          800: "hsl(var(--text-800))",
          900: "hsl(var(--text-900))",
          950: "hsl(var(--text-950))",
        },

        background: {
          DEFAULT: "hsl(var(--background))",
          50: "hsl(var(--background-50))",
          100: "hsl(var(--background-100))",
          200: "hsl(var(--background-200))",
          300: "hsl(var(--background-300))",
          400: "hsl(var(--background-400))",
          500: "hsl(var(--background-500))",
          600: "hsl(var(--background-600))",
          700: "hsl(var(--background-700))",
          800: "hsl(var(--background-800))",
          900: "hsl(var(--background-900))",
          950: "hsl(var(--background-950))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
          950: "hsl(var(--primary-950))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          50: "hsl(var(--secondary-50))",
          100: "hsl(var(--secondary-100))",
          200: "hsl(var(--secondary-200))",
          300: "hsl(var(--secondary-300))",
          400: "hsl(var(--secondary-400))",
          500: "hsl(var(--secondary-500))",
          600: "hsl(var(--secondary-600))",
          700: "hsl(var(--secondary-700))",
          800: "hsl(var(--secondary-800))",
          900: "hsl(var(--secondary-900))",
          950: "hsl(var(--secondary-950))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          50: "hsl(var(--accent-50))",
          100: "hsl(var(--accent-100))",
          200: "hsl(var(--accent-200))",
          300: "hsl(var(--accent-300))",
          400: "hsl(var(--accent-400))",
          500: "hsl(var(--accent-500))",
          600: "hsl(var(--accent-600))",
          700: "hsl(var(--accent-700))",
          800: "hsl(var(--accent-800))",
          900: "hsl(var(--accent-900))",
          950: "hsl(var(--accent-950))",
        },
      },
      boxShadow: {
        header: `1px 1px 2px 1px hsl(var(--background-500)) inset,  
          -1px 1px 0px 1px hsl(var(--background-500)) inset`,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slow-to-down": {
          "0%": {
            transform: "translateY(0px)",
          },
          "80%, 100%": {
            backgroundColor: "hsl(var(--background))",
            boxShadow: "0px 0px 5px 0px hsl(var(--background-500)) inset",
          },
          "100%": {
            transform: "translateY(15px)",
            boxShadow: "0px 0px 5px 0px hsl(var(--background-500)) inset",
          },
        },
        "slow-to-up": {
          "0%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(-10px)",
          },
        },
        "grow-since-center": {
          "0%": {
            height: "0",
            width: "0",
          },
          "100%": {
            height: "3rem",
            width: "3.5rem",
            transformOrigin: "top",
            transitionDelay: "0.2s",
          },
        },
        "hamburger-top-s": {
          "0%": {
            y: "25",
          },
          "40%": {
            y: "45",
          },
          "100%": {
            y: "45",
            transform: "rotate(45deg)",
          },
        },
        "hamburger-bottom-s": {
          "0%": {
            y: "65",
          },
          "40%": {
            y: "45",
          },
          "100%": {
            y: "45",
            transform: "rotate(-45deg)",
          },
        },
        "hamburger-top-e": {
          "0%": {
            y: "45",
          },
          "50%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            y: "25",
          },
        },
        "hamburger-bottom-e": {
          "0%": {
            y: "45",
          },
          "50%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            y: "65",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slow-to-down": "slow-to-down 0.3s ease-in-out forwards",
        "slow-to-up": "slow-to-up 0.3s forwards ease-in-out",
        "grow-since-center": "grow-since-center 0.3s forwards ease-in-out",
        "hamburger-top-s": "hamburger-top-s 0.7s forwards ease-in-out",
        "hamburger-top-e": "hamburger-top-e 0.7s forwards ease-in",
        "hamburger-bottom-s": "hamburger-bottom-s 0.7s forwards ease-in-out",
        "hamburger-bottom-e": "hamburger-bottom-e 0.7s forwards ease-in",
      },
      gridTemplateColumns: {
        about: "repeat(6, 100px)",
        "about-sm": "repeat(4, 100px)",
      },
      gridTemplateRows: {
        about: "repeat(4, 100px)",
      },
      gridColumn: {
        n: "auto / span 2",
      },
      backgroundImage: {
        footprint: "url('./assets/footprint.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
