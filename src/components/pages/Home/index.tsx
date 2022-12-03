import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeSelection from '^/components/atoms/HomeSelection';

const Home: FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HomeSelection
        title="Koishi"
        btnColor="#20CC20"
        onClick={() => navigate('koishi')}
      />
      <HomeSelection
        title="Hoshino"
        btnColor="#DD90BB"
        onClick={() => navigate('hoshino')}
      />
    </div>
  );
};

export default Home;
