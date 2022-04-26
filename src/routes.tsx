import React from "react";
import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";

const HomePage = React.lazy(() => import('./pages/HomePage'))

function Routes(){
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<HomePage />} />
    </ReactRouterRoutes>
  );
}

export default Routes;