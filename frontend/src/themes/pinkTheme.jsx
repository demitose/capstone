import { createTheme } from "@mui/material/styles";

// create a new theme with shades of light pink
export const pinkTheme = createTheme({
  palette: {
    primary: { main: "#FFC0CB", contrastText: "#fff" }, // Light Pink
    secondary: { main: "#FFB6C1", contrastText: "#fff" }, // Lighter Pink
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #FFB6C1; }`, // Link color
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
});
