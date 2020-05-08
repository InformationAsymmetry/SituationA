import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const SituationOperator = ({ loading, results }) => (
  <React.Fragment>
    <h1>theSituation Operator</h1>
    <hr></hr>
    <Components.Datatable collectionName="Situations"/>
    <Components.Datatable collectionName="SituationStates"/>
    <Components.Datatable collectionName="TradeRequests"/>
  </React.Fragment>
)

const options = {
  collectionName: "Situations",
  fragmentName: 'SituationsFragment'
}

registerComponent({ name: 'SituationOperator', component: SituationOperator});