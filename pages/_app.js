import '../styles/globals.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";
function MyApp({ Component, pageProps }) {
  const outerTheme = createTheme({

    breakpoints:{
      values:{
        xs:0,
        sm:600,
        md:900,
        lg:1100,
        xl:1300,
      }
    },
    palette: {
      primary: {
        main: "#3C6562",
        dark: "#00454A",
      },
      secondary: {
        main: "#C7CFDF",
        light: "#E1E6ED",
        dark: "#FFFFFF",
      },
      black:{
        dark:'#313131',
        light:'#656565'
      },
      blue:{
        light:'#526899'
      },
      red:{
        light:'#ED1C24'
      }
    },
   
  });
  return( 
  	<ThemeProvider theme={outerTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
