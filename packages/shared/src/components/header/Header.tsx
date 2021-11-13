import { FC } from 'react';
import styled from 'styled-components';

export const Header: FC = ({ children }) => {
    return (
        <HeaderRoot role="banner">
            <HeaderContent>{children}</HeaderContent>
        </HeaderRoot>
    );
};

const HeaderRoot = styled.header`
    position: sticky;
    top: 0;
    z-index: ${props => props.theme.zIndexes.navigationBar};
    height: 80px;
    border-bottom: 1px solid ${props => props.theme.colors.brand.bgColor};
    background-color: ${props => props.theme.colors.default.bgColor};
    width: 100%;
`;

const HeaderContent = styled.div`
    width: 100%;
    height: 100%;
    max-width: ${props => props.theme.layout.maxWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
