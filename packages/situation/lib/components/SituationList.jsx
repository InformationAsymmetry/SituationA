import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

const SituationList = ({ loading, results }) => (
  <React.Fragment>
    {!loading && results.map( situation => (
      <React.Fragment  key={situation._id}>
        <Components.Situation situation={situation} tradeRequests={situation.tradeRequests}/>
        <hr></hr>
      </React.Fragment>
    ))}
  </React.Fragment>
)

const options = {
  collectionName: "Situations",
  fragmentName: 'SituationsFragment'
}

registerComponent({ name: 'SituationList', component: SituationList, hocs: [[withMulti2, options]]});