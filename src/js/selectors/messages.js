import { createSelector } from 'reselect';

export const selectMessages = (state) => state.messages;
export const sortedMessages = createSelector(
  selectMessages,
  (messages) => messages.toArray().sort((a, b) => a.get('tick') - b.get('tick'))
);
