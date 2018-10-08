import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { MESSAGE_TYPE } from '_actions/messages';
import { Blue } from '_widgets/colours';

const WelcomeMessageContent = ({ familyName }) => (
  <div>
    <div className="+push-bottom">
      {`After searching far and wide, the ${familyName} clan have settled on a location they hope will make a suitable home.`}
    </div>

    <div className="+push-bottom">
      {'You will need all your wits about you to best the natural elements and propser!'}
    </div>

    {'Good luck!'}
  </div>
);

const MessageDetail = connect(
  (state, ownProps) => ({ message: state.messages.get(ownProps.match.params.messageID) })
)(
  ({ message }) => {

    if (!message) return <Redirect to={'/game/messages'}/>;

    let content = null;

    switch (message.get('type')) {
      case MESSAGE_TYPE.WELCOME: {
        content = (
          <WelcomeMessageContent
            familyName={message.getIn(['content', 'familyName'])}
          />
        );
        break;
      }

      case MESSAGE_TYPE.GENERIC: {
        content = (
          <div>
            {message.get('content')}
          </div>
        );
        break;
      }

      default:
        content = <div>{'texty'}</div>;
    }

    return (
      <div>
        <div className="+push-bottom">
          <h3>{message.get('title')}</h3>
          <h5>{message.get('date')}</h5>
        </div>

        <div>
          {content}
        </div>
      </div>
    );
  }
);

export default MessageDetail;
