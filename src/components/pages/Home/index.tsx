import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HomeSelection from '^/components/atoms/HomeSelection';
import color from '^/constants/color';

import KoishiImg from '^/assets/home/koishi.png';
import HoshinoImg from '^/assets/home/hoshino.png';
import { RouteMatch, RouteName, RouteTitle } from '^/types';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Home: FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Root>
      <HomeSelection
        title={RouteTitle[RouteName.KOISHI]}
        btnColor={color.koishiTheme}
        onClick={() => navigate(RouteMatch[RouteName.KOISHI])}
      >
        <img
          src={KoishiImg}
          alt="Koishi Komeiji"
        />
      </HomeSelection>
      <HomeSelection
        title={RouteTitle[RouteName.HOSHINO]}
        btnColor={color.hoshinoTheme}
        onClick={() => navigate(RouteMatch[RouteName.HOSHINO])}
      >
        <img
          src={HoshinoImg}
          alt="Hoshino Takanashi"
        />
      </HomeSelection>
    </Root>
  );
};

export default Home;
