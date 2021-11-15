import { DefaultTheme } from 'styled-components';

const colors = {
    white: '#fff',
    black: '#000',
    grey: '#888',
    blue: '#0666eb',
    blueDark: '#055bd3',
    blueDarker: '#0147aa',
    purple: '#5e2d9c',

    green: '#31ed83',
    yellow: '#ffd826',
    red: '#ff6066',
};

export const defaultTheme: DefaultTheme = {
    colors: {
        brand: {
            primaryText: colors.white,
            secondaryText: colors.white,
            bgColor: colors.blue,
            bgColorDark: colors.blueDark,
            bgColorDarker: colors.blueDarker,
            accent: colors.purple,
        },

        default: {
            primaryText: colors.black,
            secondaryText: colors.grey,
            bgColor: colors.white,
            accent: colors.blue,
            accentHover: colors.blueDarker,
        },
    },

    status: {
        success: colors.green,
        warning: colors.yellow,
        critical: colors.red,
    },

    zIndexes: {
        navigationBar: 100,
        dropdown: 200,
    },

    layout: {
        maxWidth: '980px',
    },
};
