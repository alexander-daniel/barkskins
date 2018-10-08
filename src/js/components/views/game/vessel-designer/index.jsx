import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DesignList from './design-list';
import DesignCreate from './create';
import DesignEditor from './editor';

class VesselDesigner extends React.Component {
  render() {
    return (
      <div className="+flex">
        <DesignList />

        <Switch>
          <Route path="/game/vessel-designer/create" component={DesignCreate}/>
          <Route path="/game/vessel-designer/:designID" component={DesignEditor}/>
          <Route component={() => null}/>
        </Switch>
      </div>
    );
  }
}

export default VesselDesigner;
