import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Home: FC<{}> = () => (
  <div>
    <h1>
      Currently Building!
    </h1>
    <Outlet />
  </div>
);

export default Home;
