import { createTheme } from "@mui/material/styles";

// create a new theme with shades of pink
export const pinkTheme = createTheme({
  palette: {
    primary: { main: "#E91E63", contrastText: "#fff" }, // Pink
    secondary: { main: "#F06292", contrastText: "#fff" }, // Light Pink
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #F06292; }`, // Link color
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
});
