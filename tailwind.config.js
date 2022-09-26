/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],

    theme: {
        screens: {
            mobile: "280px",
            tablet: "768px",
            laptop: "1024px",
            desktop: "1280px",
        },
        colors: {
            black: "#191919",
            orange: "#E4572E",
            white: "#EFEFEF",
        },
        maxWidth: {
            custom: "1160px",
        },
        extend: {
            fontFamily: {
                sans: ["Prompt", ...defaultTheme.fontFamily.sans],
                display: ["Bebas Neue"],
            },
        },
    },
    plugins: [],
};
