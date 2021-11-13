import { Header, Logo } from '@exchanger/shared';
import { FC } from 'react';
import styled from 'styled-components';

export const MainLayout: FC = ({ children }) => (
    <LayoutRoot>
        <Header>
            <a href="/" aria-label="Go to the main page">
                <Logo />
            </a>
        </Header>
        <LayoutContent>{children}</LayoutContent>
    </LayoutRoot>
);

const LayoutRoot = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const LayoutContent = styled.div`
    width: 100%;
    max-width: ${props => props.theme.layout.maxWidth};
    padding: 0 16px;
`;
