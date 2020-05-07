import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { useState } from 'react';

const SituationState = ({ situation, situationState }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <React.Fragment>
      {isEditing ? (
        <React.Fragment>
          <h2> <a onClick={e => setIsEditing(false)}><span style={{float: "right", cursor: "no-drop"}}>🌋</span></a></h2>
          <Components.SmartForm collectionName='SituationStates' fields={["mood", "moodboardUrl"]} documentId={situationState._id} successCallback={document => {setIsEditing(false);}}/>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <a onClick={e => setIsEditing(true)}><span style={{float: "right", cursor: "help"}}>🌋</span></a>
          <a style={{ cursor: "crosshair" }} target="_blank" href={situationState.moodboardUrl}><img width="100%" src={situationState.moodboardUrl}></img></a>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

registerComponent({ name: 'SituationState', component: SituationState });