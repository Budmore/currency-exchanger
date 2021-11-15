import styled from 'styled-components';

export const Logo = () => {
    return <LogoRoot>ExChanger</LogoRoot>;
};

const LogoRoot = styled.div(({ theme }) => ({
    color: theme.colors.default.primaryText,
    fontSize: '24px',
    fontWeight: 900,
}));
