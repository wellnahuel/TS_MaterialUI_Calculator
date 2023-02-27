import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#E9CA00" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 1,
        },
      },
    },
  },
  typography: {
    button: {
      fontSize: "1.4rem",
    },
  },
});

export default theme;
