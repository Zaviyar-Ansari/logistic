/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary1: "#03103D",
                primary2: "#FF5E18",
                primary3: "#1C1919",
                primary4: "#4B4E5A",
                primary5: "#2D313E",
                primary6: "#3F434E",
            },
        },
        fontFamily: {
            Kumbh: ["Kumbh Sans"],
            Inter: ["Inter"],
            Noto: ["Noto Sans"],

        },

        plugins: [],
    }
}