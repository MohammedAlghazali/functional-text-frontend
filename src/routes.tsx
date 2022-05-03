import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

import { HOME_PAGE_URL, REGISTRATION_INFO_URL } from './constants/url.constants';

export const renderRoutes = (routes: any = []) => (
  <Suspense fallback={<Loading />}>
    <Routes>
      {routes.map((route: any) => {
        const Component: any = route.component;
        const { path } = route;
        return (
          <Route path={path} element={<Component />} />
        );
      })}
    </Routes>
  </Suspense>
);

export const routes = [
  {
    path: HOME_PAGE_URL,
    component: lazy(() => import('./views/register')),
  },
  {
    path: REGISTRATION_INFO_URL,
    component: lazy(() => import('./views/registration-info')),
  },
  {
    path: '*',
    component: lazy(() => import('./views/errors')),
  },
];

export default routes;
