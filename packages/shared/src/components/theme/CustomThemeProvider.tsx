import { FC } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';

interface CustomThemeProviderProps {
    theme?: DefaultTheme;
}

export const CustomThemeProvider: FC<CustomThemeProviderProps> = ({ theme, children }) => {
    return (
        <ThemeProvider
            theme={() => ({
                ...defaultTheme,
                theme,
            })}
        >
            {children}
        </ThemeProvider>
    );
};
