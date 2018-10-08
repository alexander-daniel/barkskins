import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const IslandList = connect(
  (state) => ({ islands: state.islands })
)(({ islands }) => (
  <div className="+push-right-double">
    <h4>{'Islands'}</h4>
    <div>
      {islands.toArray().map((island, i) => {
        return (
          <div key={i}>
            <Link to={`/game/islands/${island.get('id')}`}>
              {island.get('name')}
            </Link>
          </div>
        );
      })}
    </div>
  </div>
));

export default IslandList;
