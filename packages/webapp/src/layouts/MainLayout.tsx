import React from 'react';
import styled from 'styled-components';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => (
    <LayoutRoot>
        <LayoutContent>{props.children}</LayoutContent>
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
    padding: 0 16px;
`;
