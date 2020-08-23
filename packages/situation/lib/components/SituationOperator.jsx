import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const SituationOperator = () => (
  <React.Fragment>
    <h1>theSituation Operator</h1>
    <hr></hr>
    <Components.Datatable collectionName="Situations"/>
    <Components.Datatable collectionName="SituationStates"/>
    <Components.Datatable collectionName="TradeRequests"/>
  </React.Fragment>
)

export default SituationOperator