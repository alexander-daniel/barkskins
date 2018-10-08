import React from 'react';
import { Route } from 'react-router-dom';
import IslandList from './island-list';
import IslandDetail from './island-detail';

export default () => (
  <div className="+flex">
    <IslandList />
    <Route path="/game/islands/:islandID" component={IslandDetail} />
  </div>
);
