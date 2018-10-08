import * as React from 'react';
import Howler from 'howler';
import { connect } from 'react-redux';
import { play, stop, next, back } from '_actions/sounds';
import Button from '_widgets/button';

class SoundPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      trackAudioData: {},
      isLoading: true
    };
  }

  componentWillMount() {
    const trackAudioData = {};
    const fetchPromises = this.props.songs.map(trackName => {
      return new Promise((resolve) => {
        const howl = new Howler.Howl({
          src: `/assets/sound/${trackName}.mp3`,
          autoPlay: false,
          onload: resolve,
          onend: () => {
            this.props.next();
          }
        });

        trackAudioData[trackName] = howl;
      });
    });

    Promise.all(fetchPromises).then(() => {
      this.setState({ trackAudioData, isLoading: false });
    }).catch(err => {
      console.error(err);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loadedTrackIndex !== this.props.loadedTrackIndex) {
      // change song
      if (this.state.howl) {
        this.state.howl.fade(1, 0, 1000);
        this.state.howl.stop();
      }

      const trackName = nextProps.songs.get(nextProps.loadedTrackIndex);
      const howl = this.state.trackAudioData[trackName];

      if (nextProps.isPlaying) {
        howl.play();
      }


      this.setState({ howl });
    }

    if (nextProps.isPlaying && !this.props.isPlaying) {
      const trackName = nextProps.songs.get(nextProps.loadedTrackIndex);
      const howl = this.state.trackAudioData[trackName];
      howl.play();
      this.setState({ howl });
    }

    if (!nextProps.isPlaying && this.props.isPlaying) {
      this.state.howl.pause();
      this.setState({ howl: null });
    }
  }

  onPlayPause() {
    if (this.props.isPlaying) {
      this.props.stop();
    }

    else {
      this.props.play();
    }
  }

  render() {

    if (this.state.isLoading) {
      return (
        <Button>
          {'Loading ...'}
        </Button>
      );
    }
    return (
      <div className="+flex" style={{
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden'
        // marginTop: 'auto'
      }}
      >
        <div className="marquee-container">
          <div className="marquee">
            <span className="text">
              {this.props.currentSongName}
            </span>
            <span className="text">
              {this.props.currentSongName}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box', width: '100%' }}>
          <Button onClick={this.props.back} className="+push-right">
            {'<'}
          </Button>

          <Button onClick={this.onPlayPause.bind(this)} className="+push-right" style={{ width: '50px' }}>
            {this.props.isPlaying ? 'Pause' : 'Play'}
          </Button>

          <Button onClick={this.props.next}>
            {'>'}
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadedTrackIndex: state.sounds.get('loadedTrackIndex'),
    isPlaying: state.sounds.get('isPlaying'),
    songs: state.sounds.get('songs'),
    currentSongName: state.sounds.getIn(['songs', state.sounds.get('loadedTrackIndex')])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    play: () => {
      dispatch(play());
    },

    stop: () => {
      dispatch(stop());
    },

    next: () => {
      dispatch(next());
    },

    back: () => {
      dispatch(back());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SoundPanel);
