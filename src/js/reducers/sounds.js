import { fromJS } from 'immutable';
import * as actions from '_actions/sounds';
import RNG from '_utils/chance';

const initialState = fromJS({
  songs: RNG.shuffle([
    'arcade_days',
    'dreams',
    'etoile',
    'fresh_fruit',
    'nostalgia',
    'stressful_times',
    'alfred_my_dearest',
    'and_loathing',
    'in_fear',
    'lurkers',
    'mum_bell'
  ]),
  loadedTrackIndex: 0,
  isPlaying: false
});

const sounds = (
  state = initialState,
  action
) => {
  switch (action.type) {

    case actions.PLAY: {
      return state.set('isPlaying', true);
    }

    case actions.STOP: {
      return state.set('isPlaying', false);
    }

    case actions.NEXT_TRACK:
      return state.set('loadedTrackIndex',
      state.get('loadedTrackIndex') === state.get('songs').size - 1 ? 0 : state.get('loadedTrackIndex') + 1
    );

    case actions.PREVIOUS_TRACK:
      return state.set('loadedTrackIndex',
      state.get('loadedTrackIndex') === 0 ? state.get('songs').size - 1 : state.get('loadedTrackIndex') - 1
    );

    default:
      return state;
  }
};

export default sounds;
