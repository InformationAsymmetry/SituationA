import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { useState } from 'react';

const SituationState = ({ situation, situationState }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <React.Fragment>
      {isEditing ? (
        <React.Fragment>
          <h2><span>{situationState.mood}</span> {situation.name} <a onClick={e => setIsEditing(false)}><span style={{float: "right", backgroundColor: "red"}}>🌋</span></a></h2>
          <Components.SmartForm collectionName='SituationStates' fields={["mood", "moodboardUrl"]} documentId={situationState._id} successCallback={document => {setIsEditing(false);}}/>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h2><span style={{color: "gray"}}>{situationState.mood}</span> {situation.name} <a onClick={e => setIsEditing(true)}><span style={{float: "right"}}>🌋</span></a></h2>
          <img src={situationState.moodboardUrl}></img>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

registerComponent({ name: 'SituationState', component: SituationState });