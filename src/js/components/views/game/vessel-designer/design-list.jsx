import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '_widgets/button';

const DesignList = connect(
  (state) => ({ designs: state.vesselDesigns })
)(({ designs }) => (
  <div className="+push-right-double">
    <div>

      <div className="+push-bottom">
        <Link to={'/game/vessel-designer/create'}>
          <Button>{'Create a Design'}</Button>
        </Link>
      </div>

      {designs.toArray().map((design, i) => {
        return (
          <div key={i}>
            <Link to={`/game/vessel-designer/${design.get('id')}`}>
              {design.get('name')}
            </Link>
          </div>
        );
      })}
    </div>
  </div>
));

export default DesignList;
