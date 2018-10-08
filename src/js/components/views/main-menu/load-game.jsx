import React from 'react';
import { connect } from 'react-redux';
import Button from '_widgets/button';
import { loadGame } from '_actions/game';

class LoadGameMenu extends React.Component {

  componentDidMount() {
    this.button.focus();
  }

  newGame(evt) {
    const { history } = this.props;
    evt.preventDefault();
    history.push('/menu/new-game');
  }

  render() {
  const { loadGame } = this.props;

  return (
    <form onSubmit={this.newGame.bind(this)}>
      <div className="+push-bottom">
        <Button onClick={this.newGame.bind(this)} ref={c => (this.button = c)}>
          {'new game'}
        </Button>
      </div>

      <div>
        <Button>
          <label htmlFor="load-file" style={{ display: 'block' }}>{'load game'}</label>
        </Button>
        <input
          style={{
            width: '0.1px',
            height: '0.1px',
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
            zIndex: -1,
          }}
          id="load-file"
          type="file"
          onChange={(e) => loadGame(e.target.files[0])}
          accept=".barkskins"
        />
      </div>
    </form>
  );
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadGame: async (saveFile) => {
      try {
        await dispatch(loadGame(saveFile));
        ownProps.history.push('/game/home');
      }
      catch (e) {
        console.error('Error loading game from save', e);
      }
    }
  };
};


export default connect(null, mapDispatchToProps)(LoadGameMenu);
