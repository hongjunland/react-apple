import React from "react";
import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";

const HomePage = React.lazy(() => import('./pages/HomePage'))
const HomePageTest = React.lazy(() => import('./pages/HomePageTest'))

function Routes(){
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<HomePageTest />} />
    </ReactRouterRoutes>
  );
}

export default Routes;