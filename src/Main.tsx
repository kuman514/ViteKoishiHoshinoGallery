import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import router from '^/router';

const Root = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: white;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const Main: FC<{}> = () => (
  <Root>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="koishi">Koishi</a>
        </li>
        <li>
          <a href="hoshino">Hoshino</a>
        </li>
      </ul>
    </nav>
    <RouterProvider
      router={router}
    />
  </Root>
);

export default Main;
