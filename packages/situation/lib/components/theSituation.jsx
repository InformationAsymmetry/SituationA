import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import Grid from '@material-ui/core/Grid';

const theSituation = ({ loading, results }) => (  
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
  fragmentName: 'SituationsFragment',
  limit: 1
}

registerComponent({ name: 'theSituation', component: theSituation, hocs: [[withMulti2, options]] });