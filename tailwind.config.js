import forms from '@tailwindcss/forms';
import flowbite from "flowbite/plugin"
import svgToDataUri from 'mini-svg-data-uri'
import defaultTheme from 'tailwindcss/defaultTheme';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#283890',
            }
        },
    },

    plugins: [
        forms,
        flowbite,
        function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'bg-grid': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                },
                { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
            )

            matchUtilities(
                {
                    highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
                },
                { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
            )
        },
    ],
};
