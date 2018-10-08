import React from 'react';
import { connect } from 'react-redux';
import Input from '_widgets/input';
import Button from '_widgets/button';
import { createVesselDesign } from '_actions/vessel-designs';
import { Equipment } from '_models/vessel-designs';

class DesignCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      equipment: {

      }
    };
  }

  create(evt) {
    this.props.dispatch(createVesselDesign({ ...this.state }));
    evt.preventDefault();
  }

  render() {
    return (
      <div>
        <h4>{'Create a design'}</h4>

        <form onSubmit={this.create.bind(this)}>
          <div className="+push-bottom">
            <span>{'Name'}</span>
            <Input
              value={this.state.name}
              onChange={(evt) => this.setState({ name: evt.target.value })}
              placeholder={'Vessel Class Name'}
            />
          </div>

          <div className="+push-bottom">
            <span>{'Equipment'}</span>
            <select style={{ display: 'block' }}>
              { Object.keys(Equipment).map((e, i) => {
                return (
                  <option key={i}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>

          <Button type="submit" onClick={this.create.bind(this)}>
            {'Create'}
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(DesignCreator);
