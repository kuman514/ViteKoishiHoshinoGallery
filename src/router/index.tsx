import React, { ReactNode } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Main from '^/Main';
import Home from '^/components/pages/Home';
import Koishi from '^/components/pages/Koishi';
import Hoshino from '^/components/pages/Hoshino';
import ErrorPage from '^/components/pages/ErrorPage';

import { RouteName, RouteMatch } from '^/types';

const element: Record<RouteName, ReactNode> = {
  [RouteName.HOME]: <Home />,
  [RouteName.KOISHI]: <Koishi />,
  [RouteName.HOSHINO]: <Hoshino />,
};

const routeElements = (Object.keys(RouteMatch) as Array<RouteName>).map((key) => (
  <Route key={key} path={RouteMatch[key]} element={element[key]} />
));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />} errorElement={<ErrorPage />}>
      { routeElements }
    </Route>,
  ),
);

export default router;
