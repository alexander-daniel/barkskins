import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ordinalSuffix from '_utils/ordinal-suffix';
import GameMenu from './game-menu';
import Sound from './sound';

const GameHeader = ({ socketID, date, season, year }) => {
  return (
    <div className="main-header +flex" style={{ justifyContent: 'space-between' }}>

      <div>
        <div className="+push-bottom">
          {`${socketID} - ${ordinalSuffix(date)} of ${season} ${year}`}
        </div>

        <GameMenu />
      </div>

      <div style={{ width: '120px' }}>
        {/* <Sound/> */}
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

export default withRouter(connect(mapStateToProps)(GameHeader));
