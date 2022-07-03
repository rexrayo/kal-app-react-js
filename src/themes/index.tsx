import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
    dark: true,
    colors: {
        common: {
            white: '#ffffff',
            black: '#000000',
            gray: '#7c7979',
            darkGray: '#828282',
        },
        background: '#121212',
        shadow: '#006978',
        surface: '#2b2b2b',
        text: '#ffffff',
        primary: '#006978',
        error: '#ff0D10'
    },

    fontSizes: {
        small: "16px",
        medium: "18px",
        large: "25px",
        title: "40px"
    }
};

export const lightTheme: DefaultTheme = {
    dark: false,
    colors: {
        common: {
            white: '#ffffff',
            black: '#000000',
            gray: '#7c7979',
            darkGray: '#828282',
        },
        background: '#ffffff',
        shadow: '#006978',
        surface: '#e4e4e4',
        text: '#000000',
        primary: '#56c8d8',
        error: '#ff0D10'
    },
    fontSizes: {
        small: "16px",
        medium: "18px",
        large: "25px",
        title: "40px"
    }
};
