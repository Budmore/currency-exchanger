import { DefaultTheme } from 'styled-components';

const colors = {
    white: '#fff',
    black: '#000',
    batmanShadow: '#525c66',
    blue: '#0666eb',
    purple: '#5e2d9c',

    green: '#31ed83',
    yellow: '#ffd826',
    red: '#ff6066',
};

export const defaultTheme: DefaultTheme = {
    colors: {
        brand: {
            textColor: colors.white,
            bgColor: colors.blue,
            accent: colors.purple,
        },

        default: {
            textColor: colors.black,
            bgColor: colors.white,
            accent: colors.blue,
            separator: colors.batmanShadow,
        },
    },

    status: {
        success: colors.green,
        warning: colors.yellow,
        critical: colors.red,
    },

    zIndexes: {
        navigationBar: 100,
    },

    layout: {
        maxWidth: '980px',
    },

    animation: {
        cubicBezier: 'cubic-bezier(0, 0, 0.2, 1)',
    },
};
