import React, { FC } from 'react';
import styled from 'styled-components';
import NavUl from '^/components/molecules/NavUl';

const Root = styled.nav``;

const Nav: FC<{}> = () => (
  <Root>
    <NavUl />
  </Root>
);

export default Nav;
