/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hit-green": "#6FD49C",
        "blow-yellow": "#E2D146",
        "pick-1": "#8BC2AE",
        "pick-2": "#E4BF5E",
        "pick-3": "#9A3A4C",
        "pick-4": "#8251B0",
        "pick-5": "#51B066",
        "pick-6": "#2357CA",
        "sheikah-lightBlue": "#3CD3FC",
        "sheikah-darkBlue": "#145E94",
        "menu-blue": "#21BCFF",
        "sheikah-yellow": "#E1C139",
        "botw-brown": "#FFFDE4",
        "backdrop-brown": "#E2DED3",
        "defeat-red": "#F42300",
        "mainBG": "#121311",
        "shiny-lightBlue": "#BAEFFB",
      },
      height: {
        '17': '4.3rem',
        '84': '21rem',
        '128': '30rem',
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(6rem,1fr))",
      },
      dropShadow: {
        "blueDrop": [
          "0px 0px 5px #97DAFF",
          "0px 0px 2px #4FC0FF"
        ]
      },
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-pick-(1|2|3|4|5|6)/
  }
  ],
}

