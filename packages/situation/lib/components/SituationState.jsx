import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const SituationState = ({ situation, situationState }) => (
  <React.Fragment>
    <h2><span style={{color: "gray"}}>{situationState.mood}</span> {situation.name}</h2>
    <img src={situationState.moodboardUrl}></img>
  </React.Fragment>
)

registerComponent({ name: 'SituationState', component: SituationState });