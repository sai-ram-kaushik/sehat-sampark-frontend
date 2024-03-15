/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#FFFFFF",
                primary: "#000000",
                secondary: "#24306E",
            },

            fontFamily: {
                heading: "Kaisei Decol",
                bodyContent: "Poppins",
            },
        },
    },
    plugins: [],
};
