import React from 'react';
import { Components } from 'meteor/vulcan:core';

export const SituationOperator = () => (
  <React.Fragment>
    <h1>theSituation Operator</h1>
    <hr></hr>
    <Components.Datatable collectionName="Situations"/>
    <Components.Datatable collectionName="SituationStates"/>
    <Components.Datatable collectionName="TradeRequests"/>
  </React.Fragment>
)