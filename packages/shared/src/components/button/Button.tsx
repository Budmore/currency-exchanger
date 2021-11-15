import { ButtonHTMLAttributes, FC } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'primary' | 'secondary';
    variant?: 'solid' | 'outline';
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

        let fontFamily = {
            fontSize: '18px',
            fontWeight: 600,
        };

        return {
            ...themeStyles,
            ...fontFamily,
            cursor: 'pointer',
            width: '100%',
            border: 0,
            height: '50px',
            borderRadius: '4px',
            transition: 'background-color 100ms ease-in',

            ...(disabled && { opacity: 0.4, pointerEvents: 'none' }),
        };
    }
);
