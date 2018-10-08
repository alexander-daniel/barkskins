## Barkskins -- (mostly) text based strategy game

#### `src/actions`
redux actions for updating the state. Some actions are called by user input, others as a result of a turn elapsing.

#### `src/components`
React components and views

#### `src/models`
Data models for objects that are part of the game.

#### `src/reducers`
game state reducers.

#### `src/selectors`
Redux selectors to simplify grabbing desired slices of state inside react components.

#### `src/resolvers`
Game resolvers. These do not directly update state, but rather take in the game state as it is, calculate some
changes that might have happened due to user input or random events, and then spits out a diffed state
which can then be used to update the actula game state by dispatching redux actions. This *could* eventually be
done NOT on the client if required.

Basically does `gameState -> resolve stuff based on declarative state -> newGameState`. By the time the resolvers
are called, the user has already made all of their moves.

#### `src/utils`
Anything else, RNGs, utility functions and the like.
