import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

const NavLi = styled.li`
  cursor: pointer;
`;

const Main: FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Root>
      <nav>
        <ul>
          <NavLi onClick={() => navigate('/')}>
            Home
          </NavLi>
          <NavLi onClick={() => navigate('koishi')}>
            Koishi
          </NavLi>
          <NavLi onClick={() => navigate('hoshino')}>
            Hoshino
          </NavLi>
        </ul>
      </nav>
      <Outlet />
    </Root>
  );
};

export default Main;
