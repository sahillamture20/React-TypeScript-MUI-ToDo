import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#533",
        },
        secondary: {
            main: "#333",
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
        h1: {
            fontSize: "3rem",
        },
        h2: {
            fontSize: "2rem",
        },
        h3: {
            fontSize: "1.5rem",
        },
        h4: {
            fontSize: "1.25rem",
        },
        h5: {
            fontSize: "1rem",
        },
        h6: {
            fontSize: "0.875rem",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
})