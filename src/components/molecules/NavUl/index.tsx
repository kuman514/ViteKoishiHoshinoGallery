import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavListItem from '^/components/atoms/NavListItem';
import { RouteTitle, RouteName, RouteMatch } from '^/types';

const Root = styled.ul`
  all: unset;
  display: flex;

  flex-direction: row;
  column-gap: 20px;
  row-gap: 0;

  @media (orientation: landscape) {
    flex-direction: column;
    column-gap: 0;
    row-gap: 20px;
  }
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
