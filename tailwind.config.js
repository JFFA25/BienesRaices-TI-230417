/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {
      colors: {
        'prussian-blue': '#063156', // Azul fuerte
        'munsell-blue': '#3D95A9',  // Azul medio
        'light-blue': '#0B6C95',    // Azul claro
        'black': '#040506',         // Negro fuerte
      },
    },
  },
  plugins: [],
}
