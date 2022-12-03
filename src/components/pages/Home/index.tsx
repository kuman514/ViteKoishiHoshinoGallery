import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeSelection from '^/components/atoms/HomeSelection';

import KoishiImg from '^/assets/home/koishi.png';
import HoshinoImg from '^/assets/home/hoshino.png';

const Home: FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HomeSelection
        title="Koishi"
        btnColor="#20CC20"
        onClick={() => navigate('koishi')}
      >
        <img
          src={KoishiImg}
          alt="Koishi Komeiji"
        />
      </HomeSelection>
      <HomeSelection
        title="Hoshino"
        btnColor="#DD90BB"
        onClick={() => navigate('hoshino')}
      >
        <img
          src={HoshinoImg}
          alt="Hoshino Takanashi"
        />
      </HomeSelection>
    </div>
  );
};

export default Home;
