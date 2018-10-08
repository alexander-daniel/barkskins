import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sortedMessages } from '_selectors/messages';

const MessageInbox = connect(
  (state) => ({ messages: sortedMessages(state) })
)(({ messages }) => {
  return (
    <div>
      <h3>{'Message Inbox'}</h3>
      <div>
        {
          messages.map((message) => (
            <div key={message.get('id')}>
              <Link to={`/game/messages/${message.get('id')}`} key={message.get('id')}>
                {`${message.get('date')} | ${message.get('summary')}`}
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
});

export default MessageInbox;
