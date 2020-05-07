import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const SituationTradeRequest = ({ situation, tradeRequest }) => (
  <React.Fragment>
    <p>{tradeRequest.mood}: {tradeRequest.text}</p>
  </React.Fragment>
)

registerComponent({ name: 'SituationTradeRequest', component: SituationTradeRequest });