import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const SituationState = ({ situation, situationState }) => (
  <React.Fragment>
    <p>{situationState.mood}</p>
  </React.Fragment>
)

registerComponent({ name: 'SituationState', component: SituationState });