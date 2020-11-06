import React from 'react';
import { Components } from 'meteor/vulcan:core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';

export const SituationState = ({ situation, situationState }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <React.Fragment>
      <Grid item xs={12} style={{ 'backgroundColor': '#FFF', textAlign: 'center', borderRight: '3px solid rgb(239, 125, 0)'}}>
      {isEditing ? (
        <React.Fragment>
          <h2> <a onClick={e => setIsEditing(false)}><span style={{float: 'right', cursor: 'no-drop'}}>🌋</span></a></h2>
          <Components.SmartForm collectionName='SituationStates' fields={['mood', 'moodboardUrl']} documentId={situationState._id} successCallback={document => {setIsEditing(false);}}/>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <a onClick={e => setIsEditing(true)}><span style={{float: 'right', cursor: 'help'}}>🌋</span></a>
          <a style={{ cursor: 'crosshair'}} target="_blank" rel="noopener noreferrer" href={situationState.moodboardUrl}><img width="66%" src={situationState.moodboardUrl}></img></a>
        </React.Fragment>
      )}
      </Grid>
    </React.Fragment>
  )
}