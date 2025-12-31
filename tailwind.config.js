/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'hult-black': '#000000',
                'hult-magenta': '#E6007F',
                'hult-white': '#FFFFFF',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
