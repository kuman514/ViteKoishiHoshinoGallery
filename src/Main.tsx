import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '^/components/molecules/Nav';

const Root = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;

  font-size: calc(8px + 2vmin);
  color: white;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  display: grid;
  grid-template-rows: 10vmin 1fr;
  grid-template-columns: 1fr;

  @media (orientation: landscape) {
    grid-template-rows: 1fr;
    grid-template-columns: 10vmax 1fr;
  }
`;

const ContentArea = styled.div`
`;

const Main: FC<{}> = () => (
  <Root>
    <Nav />
    <ContentArea>
      <Outlet />
    </ContentArea>
  </Root>
);

export default Main;
