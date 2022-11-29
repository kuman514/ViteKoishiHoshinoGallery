import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Home from '^/components/pages/Home';
import Main from '^/Main';
import Koishi from '^/components/pages/Koishi';
import Hoshino from '^/components/pages/Hoshino';
import ErrorPage from '^/components/pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="koishi" element={<Koishi />} />
      <Route path="hoshino" element={<Hoshino />} />
    </Route>,
  ),
);

export default router;
