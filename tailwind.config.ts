import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                brand: {
                    400: "rgb(var(--brand-blue-light-rgb) / <alpha-value>)",
                    500: "rgb(var(--brand-blue-rgb) / <alpha-value>)",
                    600: "rgb(var(--brand-blue-rgb) / <alpha-value>)",
                    700: "rgb(var(--brand-blue-deep-rgb) / <alpha-value>)",
                    900: "rgb(var(--brand-blue-deep-rgb) / <alpha-value>)",
                    950: "rgb(var(--brand-blue-deep-rgb) / <alpha-value>)",
                },
            },
            animation: {
                'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [],
};

export default config;
