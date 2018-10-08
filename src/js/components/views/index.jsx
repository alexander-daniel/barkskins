import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import MainMenu from './main-menu';
import Game from './game';

const history = createBrowserHistory();

const AppRoot = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/menu" component={MainMenu} />
        <Route path="/game" component={Game} />
        <Route component={() => <Redirect to="/menu"/>}/>
      </Switch>
    </Router>
  );
};

export default AppRoot;
