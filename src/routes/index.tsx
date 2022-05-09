import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Home from '../pages/Home';
import Register from '../pages/Register';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/register" component={Register}/>
    </BrowserRouter>
  );
}

export default Routes;