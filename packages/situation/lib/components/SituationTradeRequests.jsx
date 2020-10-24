import React from 'react';
import { SituationTradeRequest } from './SituationTradeRequest';

export const SituationTradeRequests = ({ situation, tradeRequests }) => (
  <React.Fragment>
    {tradeRequests.map( tradeRequest => (
      <SituationTradeRequest key={tradeRequest._id} situation={situation} tradeRequest={tradeRequest}/>
    ))}
  </React.Fragment>
)