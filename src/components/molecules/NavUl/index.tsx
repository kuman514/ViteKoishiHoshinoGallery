import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavListItem from '^/components/atoms/NavListItem';
import { RouteTitle, RouteName, RouteMatch } from '^/types';

const Root = styled.ul`
  display: flex;
  column-gap: 20px;
`;

const NavUl: FC<{}> = () => {
  const navigate = useNavigate();
  const navList: ReactNode = (Object.keys(RouteTitle) as Array<RouteName>).map((key) => (
    <NavListItem key={RouteTitle[key]} onClick={() => navigate(RouteMatch[key])}>
      { RouteTitle[key] }
    </NavListItem>
  ));
  return (
    <Root>
      { navList }
    </Root>
  );
};

export default NavUl;
