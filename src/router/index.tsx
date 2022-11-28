import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '^/components/pages/Home';
import Koishi from '^/components/pages/Koishi';
import Hoshino from '^/components/pages/Hoshino';
import ErrorPage from '^/components/pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/koishi',
    element: <Koishi />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/hoshino',
    element: <Hoshino />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
