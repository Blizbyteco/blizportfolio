/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary" : "Montserrat, sans-serif"
      },
      backgroundImage: {
        "banner" : "url(https://img.freepik.com/free-photo/multiracial-group-young-creative-people-smart-casual-wear-discussing-business-shaking-hands-together-smiling-while-standing-modern-office-partner-cooperation-coworker-teamwork-concept_7861-2742.jpg?t=st=1725501354~exp=1725504954~hmac=aada044d5a9e510e689279a323383e331b6af518857a8aa4b26c3d3fb7278d7c&w=2000)"
      }
    },
  },
  plugins: [],
}