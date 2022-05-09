import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Home from '../pages/Home';
import Register from '../pages/Register';
import Categories from '../pages/Categories'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/categories/:name" component={Categories}/>
    </BrowserRouter>
  );
}

export default Routes;