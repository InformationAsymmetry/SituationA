import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';

const SituationStates = ({ situation, situationStates }) => {
  let index = -1;
  situationStates.map( situationState => { index++; return situationState.index = index;})
  const [currentMoodboardIndex, setCurrentMoodboardIndex] = useState(0);
  const prevMoodboard = () => {
    let newMoodboardIndex = currentMoodboardIndex - 1;
    if( newMoodboardIndex < 0 ) {
      setCurrentMoodboardIndex(situationStates.length-1);
    }
    else setCurrentMoodboardIndex(newMoodboardIndex);
  }
  const nextMoodboard = () => {
    let newMoodboardIndex = currentMoodboardIndex + 1;
    if( newMoodboardIndex >= situationStates.length ) {
      setCurrentMoodboardIndex(0);
    }
    else setCurrentMoodboardIndex(newMoodboardIndex);
  }
  return (
    <React.Fragment>
      {situationStates.map( situationState => (
        <React.Fragment key={situationState._id}>
          {currentMoodboardIndex === situationState.index ? (
            <React.Fragment>
               <Grid container>
                <Grid onClick={e => prevMoodboard()} item xs={4} style={{fontSize: "60px", color: "#FCAD56", cursor: "nw-resize"}}>⇚</Grid>
                <Grid item xs={4} style={{cursor: "progress", lineHeight: "76px", fontSize: "35px"}}><span style={{color: "#FCAD56"}}>{situationState.mood}</span> {situation.name} </Grid>
                <Grid onClick={e => nextMoodboard()} item xs={4} style={{fontSize: "60px", textAlign: "right", color: "#FCAD56", cursor: "ne-resize"}}>⇛</Grid>
              </Grid>
            <Components.SituationState situation={situation} situationState={situationState}/>
            </React.Fragment>
          ): ( null )}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

registerComponent({ name: 'SituationStates', component: SituationStates });