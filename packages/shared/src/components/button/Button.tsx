import { ButtonHTMLAttributes, FC } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'primary' | 'secondary';
    variant?: 'solid' | 'outline' | 'icon';
}

export const Button: FC<ButtonProps> = ({
    color = 'primary',
    variant = 'solid',
    children,
    ...props
}) => {
    return (
        <ButtonRoot color={color} variant={variant} {...props}>
            {children}
        </ButtonRoot>
    );
};

const ButtonRoot = styled.button<ButtonProps>(
    ({ theme, color, variant, disabled }) => {
        let themeStyles: CSSObject = {};

        if (color === 'primary' && variant === 'solid') {
            const { primaryText, bgColor, bgColorDark, bgColorDarker } =
                theme.colors.brand;

            themeStyles = {
                color: primaryText,
                backgroundColor: bgColor,

                '&:hover': {
                    backgroundColor: bgColorDark,
                },
                '&:active': {
                    backgroundColor: bgColorDarker,
                },
            };
        }

        if (color === 'secondary') {
            const { bgColor, accent, accentHover } = theme.colors.default;

            themeStyles = {
                color: accent,
                fill: accent,
                backgroundColor: bgColor,

                '&:hover': {
                    color: accentHover,
                    fill: accentHover,
                },
            };
        }

        let fontFamily = {
            fontSize: '18px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        };

        return {
            ...themeStyles,
            ...fontFamily,
            cursor: 'pointer',
            width: '100%',
            border: 0,
            height: '50px',
            borderRadius: '4px',
            transition: 'background-color 100ms ease-in, color 100ms ease-in',

            ...(disabled && { opacity: 0.4, pointerEvents: 'none' }),
        };
    }
);
