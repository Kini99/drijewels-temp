/* eslint-disable import/prefer-default-export */
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#885422",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      default: "#faf9f7",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
    divider: "#885422",
    common: {
      white: "#fff",
      black: "#000",
    },
    brown: {
      50: "#E7DDD3",
      100: "#D7C6B5",
      200: "#C3A990",
      300: "#B08D6C",
      400: "#9C7147",
      500: "#71461C",
      600: "#5B3817",
      700: "#442A11",
      800: "#2D1C0B",
      900: "#1B1107",
    },
    footer: "#321901",
    transparent: "#88542280",
    borderColour: "#D1D1D1",
  },
  typography: {
    fontFamily: "DM Sans",
    fontSize: 14,
    h1: {
      fontFamily: "Fraunces",
      fontSize: "4rem",
      fontWeight: 500,
      "@media (max-width:768px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontFamily: "Fraunces",
      fontWeight: 500,
      "@media (max-width:768px)": {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontFamily: "Fraunces",
      "@media (max-width:768px)": {
        fontSize: "2rem",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Fraunces",
          fontSize: "1.25rem",
          borderRadius: "15px",
          textTransform: "capitalize",
        },
      },
    },
  },
});
