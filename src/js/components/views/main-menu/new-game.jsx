import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '_actions/game';
import RNG from '_utils/chance';
import Button from '_widgets/button';

class NewGameMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isConnecting: false,
      familyName: RNG.last()
    };
  }

  connect() {
    const { familyName } = this.state;
    this.setState({ isConnecting: true });
    this.props.startGame(familyName);
    this.props.history.push('/game/home');
  }

  render() {
    return (
      <div style={{ width: '420px', flex: '0 1' }}>
        <div>
          <div className="+push-bottom">{'Family Name'}</div>
          <div className="+push-bottom +display-flex">
            <input
              className="text-input"
              placeholder={''}
              value={this.state.familyName}
              onChange={({ target }) => this.setState({ familyName: target.value })}
            />
            <Button className="+push-left" onClick={() => this.setState({ familyName: RNG.last() })}>{'randomize'}</Button>
          </div>
        </div>


        <div className="+display-flex">
          <Button onClick={this.connect.bind(this)}>{'start'}</Button>
          <Button className="+push-left inactive" onClick={() => this.props.history.push('/menu')}>{'back'}</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isConnected: state.user.get('connected')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: (familyName) => {
      return dispatch(startGame(familyName));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGameMenu);
