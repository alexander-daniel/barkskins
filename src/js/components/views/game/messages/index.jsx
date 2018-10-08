import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MessageInbox from './inbox';
import MessageDetail from './detail';

export default () => (
  <div>
    <Switch>
      <Route path="/game/messages/:messageID" component={MessageDetail} />
      <Route path="/game/messages" component={MessageInbox} />
    </Switch>
  </div>
);
