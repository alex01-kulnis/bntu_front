import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { publicRoutes } from '../routes';
import { ORDER_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  return (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={ORDER_ROUTE} />
    </Switch>
  );
});

export default AppRouter;
