import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavListItem from '^/components/atoms/NavListItem';

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

const Main: FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Root>
      <nav>
        <ul>
          <NavListItem onClick={() => navigate('/')}>
            Home
          </NavListItem>
          <NavListItem onClick={() => navigate('koishi')}>
            Koishi
          </NavListItem>
          <NavListItem onClick={() => navigate('hoshino')}>
            Hoshino
          </NavListItem>
        </ul>
      </nav>
      <Outlet />
    </Root>
  );
};

export default Main;
