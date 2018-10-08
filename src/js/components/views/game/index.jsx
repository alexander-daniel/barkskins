import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import MainHeader from './header';
import Home from './home';
import Messages from './messages';
import Islands from './islands';
import Fleet from './fleet';
import VesselDesigner from './vessel-designer';

const Game = ({ isConnected }) => {
  if (!isConnected) {
    return <Redirect to={'/menu'}/>;
  }

  return (
    <div className="game-wrapper">
      <MainHeader />

      <div className="active-content">
        <Switch>
          <Route path="/game/home" component={Home} />
          <Route path="/game/islands" component={Islands} />
          <Route path="/game/fleet" component={Fleet} />
          <Route path="/game/vessel-designer" component={VesselDesigner} />
          <Route path="/game/messages" component={Messages} />
          <Route component={() => <Redirect to="/game/home"/>}/>
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isConnected: state.user.get('connected')
  };
};

export default connect(mapStateToProps)(Game);
