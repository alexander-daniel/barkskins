import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainMenuHeader from './header';
import NewGameMenu from './new-game';
import LoadGameMenu from './load-game';

const MainMenu = () => (
  <div className="main-menu">
    <MainMenuHeader />
    <div className="main-menu-content">
      <Switch>
        <Route path="/menu/new-game" component={NewGameMenu} />
        <Route path="/menu" exact={true} component={LoadGameMenu} />
        <Route component={() => <Redirect to={'/menu'}/>} />
      </Switch>
    </div>
  </div>
);

export default MainMenu;
