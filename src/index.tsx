import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '^/router';

(() => {
  const root = document.querySelector('#root');
  if (root) {
    ReactDOM.createRoot(root).render((
      <React.StrictMode>
        <RouterProvider
          router={router}
        />
      </React.StrictMode>
    ));
  }
})();
