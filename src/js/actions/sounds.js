export const PLAY = 'PLAY';
export function play() {
  return {
    type: PLAY
  };
}

export const STOP = 'STOP';
export function stop() {
  return {
    type: STOP
  };
}

export const NEXT_TRACK = 'NEXT_TRACK';
export function next() {
  return {
    type: NEXT_TRACK
  };
}

export const PREVIOUS_TRACK = 'PREVIOUS_TRACK';
export function back() {
  return {
    type: PREVIOUS_TRACK
  };
}

window.play = play;
window.stop = stop;
