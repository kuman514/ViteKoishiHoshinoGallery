import React, { FC } from 'react';
import styled from 'styled-components';
import NavUl from '^/components/molecules/NavUl';

const Root = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);

  @media (orientation: landscape) {
    height: 100vh;
  }
`;

const Nav: FC<{}> = () => (
  <Root>
    <NavUl />
  </Root>
);

export default Nav;
