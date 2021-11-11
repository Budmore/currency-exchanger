import React from 'react';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * How large should the button be?
     */
    variant?: 'solid' | 'outline';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, variant = 'solid', label, ...props }: ButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type='button'
            className={['storybook-button', `storybook-button--${variant}`, mode].join(' ')}
            {...props}
        >
            {label}
        </button>
    );
};
