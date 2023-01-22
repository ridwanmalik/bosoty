const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem", // 16px
                    sm: "2rem", // 32px
                    lg: "4rem", // 64px
                    xl: "5rem", // 80px
                    "2xl": "6rem", // 96px
                },
            },
            colors: {
                background: "#f0f5ff",
                footer: "#f7f4fb",
                theme: {
                    DEFAULT: "#7854F6",
                    dark: "#4D2AC9",
                },
                heading: "#222222",
                text: {
                    DEFAULT: "#696969",
                    light: "#9B9B9B",
                    lightest: "#ACACAC",
                    shade: "#6f6f6f",
                },
            },
            spacing: {
                68: "17rem", // 272px
                92: "23rem", // 368px
                "1/10": "10%",
                "2/10": "20%",
                "3/10": "30%",
                "4/10": "40%",
                "5/10": "50%",
                "6/10": "60%",
                "7/10": "70%",
                "8/10": "80%",
                "9/10": "90%",
            },
            width: {
                img: "calc(100% + 10rem)",
            },
            fontFamily: {
                sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                card: "0px 10px 31px rgba(7, 152, 255, 0.09)",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
