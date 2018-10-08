import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '_widgets/button';
import { getIslandByID } from '_selectors/islands';

const IslandDetail = connect(
  (state, ownProps) => {
    return {
      island: getIslandByID(state, ownProps.match.params.islandID)
    };
  }
)(({ island }) => {
  if (!island) return <Redirect to={'/game/islands'}/>;
  return (
    <div>
      <div className="+flex">
        <Link to={`/game/islands/${island.get('id')}/information`}>
          <Button className="+push-right">
            {'Information'}
          </Button>
        </Link>

        <Link to={`/game/islands/${island.get('id')}/research`}>
          <Button className="+push-right">
            {'Research'}
          </Button>
        </Link>

        <Link to={`/game/islands/${island.get('id')}/resources`}>
          <Button className="+push-right">
            {'Resources'}
          </Button>
        </Link>

        <Link to={`/game/islands/${island.get('id')}/docks`}>
          <Button className="+push-right">
            {'Docks'}
          </Button>
        </Link>

        <Link to={`/game/islands/${island.get('id')}/infrastructure`}>
          <Button className="+push-right">
            {'Infrastructure'}
          </Button>
        </Link>
        </div>
      <h3>
        {island.get('name')}
      </h3>

      <Switch>
        <Route path="/game/islands/:islandID/information" component={() => <pre>{JSON.stringify(island.toJS(), null, 2)}</pre>}/>
        <Route path="/game/islands/:islandID/research" component={() => <div>{'research'}</div>}/>
        <Route path="/game/islands/:islandID/resources" component={() => <div>{'resources'}</div>}/>
        <Route path="/game/islands/:islandID/docks" component={() => <div>{'docks'}</div>}/>
        <Route path="/game/islands/:islandID/infrastructure" component={() => <div>{'infrastructure'}</div>}/>
        <Route component={() => <Redirect to={`/game/islands/${island.get('id')}/information`}/>}/>
      </Switch>

      {/* <pre>
        {JSON.stringify(island.toJS(), null, 2)}
      </pre> */}
    </div>
  );
});

export default IslandDetail;
