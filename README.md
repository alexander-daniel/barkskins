## Barkskins -- (mostly) text based strategy game

# usage
clone the repo & cd into it

**install deps**
```
$ yarn install
```

**development usage**
Will fire up a webpack development server
```
yarn run start
```
Access the game in your browser at `http://localhost:8888`!

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


# IDEAS
## Things a user can do
- Handle production in colonies
- Handle construction in colonies
- Choose research in colonies
- Manage citizens in colonies
- Design Ships
- Control expeditions (give fleets orders)
- Engage in diplomacy (part of a fleets orders?)
- Found colonies on islands (part of a fleets orders?)
- ??? more ideas

## Turn resolution mechanics and ordering
- Population Grows on islands (or decreases)
- Workers are assigned to workshops
- Ships are checked to see if they have enough life supplies
  - If they don't, maybe morale goes down until they become pirates
- Monsters? move around
- Donations from Nobility arrive (where? in capital island? all controlled islands?)
- Per island, Production is calculated,
- Per island, Supply & Demand are calculated
- Raw Material Production is calculated
- Total empire Wealth is calculated
- Ships are checked for maintenance
- Land Troops are maintained
- Acts of god proceed
- Infrastructure renovations take place
- Production of goods takes place
- Ship Construction
- Troop Training
- Research takes place
- Expeditions expedite
- Ship Crew Training
- Espionage
- Calendar switches to new date
- Check Game Over
- ??? more ideas
