import { Header, Logo } from '@exchanger/shared';
import { FC } from 'react';
import styled from 'styled-components';

export const MainLayout: FC = ({ children }) => (
    <LayoutRoot>
        <Header>
            <Content>
                <Link href="/" aria-label="Go to the main page">
                    <Logo />
                </Link>
            </Content>
        </Header>
        <LayoutContent>
            <Content>{children}</Content>
        </LayoutContent>
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
`;

const Content = styled.div`
    padding: 0 16px;
`;

const Link = styled.a`
    text-decoration: none;
`;
