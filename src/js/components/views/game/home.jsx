import React from 'react';
import { connect } from 'react-redux';
import { getCoords } from '_utils/geokey';
import {XYPlot, MarkSeries, Hint } from 'react-vis';
import { getIslands } from '../../../selectors/islands';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this._rememberValue = this._rememberValue.bind(this);
    this._forgetValue = this._forgetValue.bind(this);
  }

  _forgetValue() {
    this.setState({
      value: null
    });
  }

  _rememberValue(value) {
    this.setState({value});
  }

  render() {
    const { value } = this.state;
    const islands = this.props.islands.toArray().map(island => {
      // debugger;
      const { x, y } = getCoords(island.get('location'));
      // console.error(island.get('size'));
      return {
        x,
        y,
        size: island.get('size'),
        label: island.get('name')
      };
    });

    return (
      <div>
        <XYPlot
          height={450}
          width={600}
          xDomain={[-20, 20]}
          yDomain={[-20, 20]}
          style={{ background: '#3574AF' }}
        >
          <MarkSeries
            data={islands}
            // sizeRange={[1, 50]}
            color="#4BB544"
            animation
            onValueMouseOver={this._rememberValue}
            onValueMouseOut={this._forgetValue}
          />
          { value ? <Hint value={value} /> : null }
        </XYPlot>
      </div>
    );
  }
}

export default connect(
  (state) => ({ islands: getIslands(state) })
)(Home);
