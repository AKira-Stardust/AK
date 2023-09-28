module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        // headerBg: "#00A19D",
        headerBg:"#A03C78",
        headerTxt: "#FFF8E5",
        primaryBg: "#FEFBF3",
        primaryTxt: "#9D9D9D",
        cardBg:"#D4ECDD",
        cardBg1: "#E05D5D",
        cardBg2: "#B8DFD8",
        cardBg3:"#E8F6EF",
        cardBg4:"#F0E5CF",
        cardBg5:"#F7F6F2",
        cardTxt:"white",
        hoverTxt1:"#DBD0C0",
        hoverTxt2:"#D9CAB3",
        hoverTxt3:"#F5C6A5",
        hoverTxt4:"#368B85",
        hoverTxt5:"#01937C",
        hoverTxt6:"#2F5D62",
        navHover1:"#F7DBF0",
        navHover2:"#F0D9E7",
        navHoverRed:"#F8485E",
        navHoverCream:"#EBD8B7",
        navHoverBlue1:"#1597E5",
        navHoverBlue2:"#113CFC",
        navHoverBlue3:"#193498",
        navHoverBlue4:"#69DADB",
        navHoverBrown:"#3F0713",
        portfolioBlue1:"#1597E5",
        portfolioBlue2:"#8FC1D4",
        portfolioBlue3:"#53B8BB",
      },
      fontFamily: {
        body:["Nunito"],
        fancy:["Kalam"]
      },
      backgroundImage: {
        'tokyo-cityscape':"url('img/bg_image.jpeg')"
      }
    },
  },
  variants: {
    extend: {
      fontSize: ['hover', 'focus','responsive'],
      fontWeight: ['hover', 'focus','responsive']
    },
  },
  plugins: [],
}
