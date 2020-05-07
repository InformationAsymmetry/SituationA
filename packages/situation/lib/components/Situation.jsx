import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

const Situation = ({ situation }) => (
  <React.Fragment>
    <h1>{situation.name}</h1>
    <h3>Situation State</h3>
    <div>
      <Components.SituationStates situation={situation} situationStates={situation.situationStates}/>
    </div>
    <h3>Trade Requests</h3>
    <div>
      <Components.SituationTradeRequests situation={situation} tradeRequests={situation.tradeRequests}/>
    </div>
  </React.Fragment>
)

registerComponent({ name: 'Situation', component: Situation });