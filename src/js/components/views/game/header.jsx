import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { gameTick, saveGame } from '_actions/game';
import Button from '_widgets/button';
import ordinalSuffix from '_utils/ordinal-suffix';

const LINKS = [
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
    panelName: 'Research',
    shouldDisplay: true,
    path: '/game/research'
  },
  {
    panelName: 'Messages',
    shouldDisplay: true,
    path: '/game/messages'
  }
];

const GameHeader = ({
  socketID,
  date,
  season,
  year,
  endTurn,
  saveGame
}) => {
  return (
    <div className="main-header +flex" style={{ justifyContent: 'space-between' }}>

      <div>
        <div className="+push-bottom">
          {`${socketID} - ${ordinalSuffix(date)} of ${season} ${year}`}
        </div>

        <div className="+flex">
          {
            LINKS.map(({ panelName, shouldDisplay, path }, i) => {
              if (!shouldDisplay) return null;

              return (
                <Link key={i} to={path}>
                  <Button className="+push-right">{panelName}</Button>
                </Link>
              );
            })
          }

          <Button onClick={endTurn} className="+push-left-double">
            {'End Turn'}
          </Button>

          <Button onClick={saveGame} className="+push-left-double">
            {'Save Game'}
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    socketID: state.user.get('socketID'),
    date: state.calendar.get('date'),
    season: state.calendar.get('season'),
    year: state.calendar.get('year')
  };
};


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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameHeader));
