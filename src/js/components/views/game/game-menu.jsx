import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { gameTick, saveGame } from '_actions/game';
import Button from '_widgets/button';
import Sound from './sound';

class HomeMenu extends React.Component {

  renderPanelButtons() {

    const panels = [
      {
        panelName: 'Home',
        shouldDisplay: true,
        path: '/game/home'
      },
      {
        panelName: 'Islands',
        shouldDisplay: true,
        path: '/game/islands'
      },
      {
        panelName: 'Fleet',
        shouldDisplay: true,
        path: '/game/home'
      },
      {
        panelName: 'Vessel Designer',
        shouldDisplay: true,
        path: '/game/vessel-designer'
      },
      {
        panelName: 'Messages',
        shouldDisplay: true,
        path: '/game/messages'
      }
    ];

    return panels.map(({ panelName, shouldDisplay, path }, i) => {
      if (!shouldDisplay) return null;

      return (
        <Link key={i} to={path}>
          <Button className="+push-right">{panelName}</Button>
        </Link>
      );
    });
  }

  render() {

    return (
      <div className="+flex">
        {this.renderPanelButtons()}

        <Button onClick={this.props.endTurn} className="+push-left-double">
          {'End Turn'}
        </Button>

        <Button onClick={this.props.saveGame} className="+push-left-double">
          {'Save Game'}
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    endTurn: () => {
      return dispatch(gameTick());
    },

    saveGame: () => {
      return dispatch(saveGame());
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(HomeMenu));
