import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

interface DropdownProps<T> {
    isOpen: boolean;
    label?: ReactNode;
    setIsOpen(value: boolean): void;
    renderItem: (item: T) => ReactNode;
    items: T[];
}

export const Dropdown = <T extends any>({
    isOpen,
    setIsOpen,
    label,
    items,
    renderItem,
}: DropdownProps<T>) => {
    return (
        <DropdownRoot>
            <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
            <Label onClick={() => setIsOpen(!isOpen)}>{label}</Label>
            <List isOpen={isOpen}>{items.map(renderItem)}</List>
        </DropdownRoot>
    );
};

const DropdownRoot = styled.div`
    display: flex;
    position: relative;
`;

const Label = styled.button`
    position: relative;
    background: 0;
    border: 0;
    padding: 0;
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const List = styled.div<{ isOpen: boolean }>`
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    z-index: ${props => props.theme.zIndexes.dropdown};
    transform-origin: center top;
    animation: ${slideIn} 300ms ease;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5);
`;

const Backdrop = styled.div<{ isOpen: boolean }>`
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    z-index: ${props => props.theme.zIndexes.dropdown};
    pointer-events: all;
`;
