/// <reference types="react-scripts" />

declare module "@mui/material/styles" {
    interface Theme {
    }

    interface ThemeOptions {
        color?: {
            black?: React.CSSProperties["color"];
            white?: React.CSSProperties["color"];
            textGrey?: React.CSSProperties["color"];
            grey?: React.CSSProperties["color"];
        }
    }
}
