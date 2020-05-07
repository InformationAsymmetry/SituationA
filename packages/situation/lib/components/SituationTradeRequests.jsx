import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const SituationTradeRequests = ({ situation, tradeRequests }) => (
  <React.Fragment>
    {tradeRequests.map( tradeRequest => (
      <Components.SituationTradeRequest key={tradeRequest._id} situation={situation} tradeRequest={tradeRequest}/>
    ))}
  </React.Fragment>
)

registerComponent({ name: 'SituationTradeRequests', component: SituationTradeRequests });