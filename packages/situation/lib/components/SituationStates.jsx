import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const SituationStates = ({ situation, situationStates }) => (
  <React.Fragment>
    {situationStates.map( situationState => (
      <Components.SituationState key={situationState._id} situation={situation} situationState={situationState}/>
    ))}
  </React.Fragment>
)

registerComponent({ name: 'SituationStates', component: SituationStates });