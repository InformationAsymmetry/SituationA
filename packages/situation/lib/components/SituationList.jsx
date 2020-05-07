import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

const SituationList = ({ loading, results }) => (
  <React.Fragment>
    {!loading && results.map( situation => (
      <Components.Situation key={situation._id} situation={situation} tradeRequests={situation.tradeRequests}/>
    ))}
  </React.Fragment>
)

const options = {
  collectionName: "Situations",
  fragmentName: 'SituationsFragment'
}

registerComponent({ name: 'SituationList', component: SituationList, hocs: [[withMulti2, options]]});