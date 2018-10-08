import chance from '_utils/chance';


export const MESSAGE_TYPE = {
  GENERIC: 'GENERIC',
  WELCOME: 'WELCOME'
};

export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export function updateMessage(messageID, update) {
  return {
    type: UPDATE_MESSAGE,
    messageID,
    update
  };
}

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = ({ title, type, summary, content }) => (dispatch, getState) => {
  const { calendar } = getState();
  const { date, season, year, tick } = calendar.toJS();
  const messageID = chance.hash();

  const message = {
    id: messageID,
    date: `${date}-${season}-${year}`,
    tick,
    type,
    title,
    summary,
    content
  };

  dispatch({
    type: ADD_MESSAGE,
    messageID,
    message
  });
};
