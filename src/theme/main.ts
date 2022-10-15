// @ts-ignore
import {createTheme, ThemeOptions} from "@mui/material/styles"
import createBreakpoints from "@mui/system/createTheme/createBreakpoints"

const black = "#000000",
    white = "#FFF",
    grey = "#E6E6E6",
    textGrey = "#7B7B7B"

const breakpoints = createBreakpoints({})

export const mainTheme = createTheme({
    palette: {
        common: {
            white: white,
            black: black
        },
        primary: {
            main: white,
            dark: black
        },
        secondary: {
            main: textGrey
        },
        text: {
            primary: black,
            secondary: white,
        },
    },
    typography: {
        fontFamily: ['Noto Sans'],
        p: {
            fontSize: '1rem',
            color: black,
        },
        h1: {
            fontSize: "3rem",
        },
        h2: {
            fontSize: "1.5rem",
        },
        h3: {
            fontSize: "1.25rem",
        }
    },
    color: {
        white: white,
        black: black,
        textGrey: textGrey,
        grey: grey
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none"
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    [breakpoints.up("md")]: {
                        padding: "0px 100px"
                    }
                }
            }
        },
        // MuiButton: {
        //     styleOverrides: {
        //         root: {
        //             textTransform: "none"
        //         }
        //     }
        // }
    },
    button: {
        navbarBtn: {
            color: black,
            fontSize: "16px",
            marginRight: "10px"
        },
        primary: {
            backgroundColor: black,
            color: white,
            border: `1px solid ${black}`,
            padding: "8px 20px",
            "&:hover": {
                backgroundColor: "transparent",
                color: black
            },
        },
        secondary: {
            backgroundColor: white,
            color: black,
            border: `1px solid ${black}`,
            padding: "8px 20px",
            "&:hover": {
                backgroundColor: black,
                color: white
            }
        }
    }
})

export type AppTheme = typeof mainTheme & ThemeOptions
