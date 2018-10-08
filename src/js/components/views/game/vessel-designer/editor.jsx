import React from 'react';
import { connect } from 'react-redux';

export default connect(
  (state, ownProps) => ({ design: state.vesselDesigns.get(ownProps.match.params.designID) })
)(({ design }) => {
  return (
    <div>
      {'design'}
      <pre>{JSON.stringify(design.toJS(), null, 2)}</pre>
    </div>
  );
});
