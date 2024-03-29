import React from 'react';
import { useState } from 'react';
import { SituationState } from './SituationState';
import Grid from '@material-ui/core/Grid';

export const SituationStates = ({ situation, situationStates }) => {
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
               <Grid container style={{ marginTop: '-8px' }}>
                <Grid item xs={1} onClick={e => prevMoodboard()} style={{borderRight: '3px solid rgb(239, 125, 0)', borderBottom: '1px solid rgb(252, 173, 86)', textAlign: 'center', fontSize: '60px', color: '#FCAD56', cursor: 'nw-resize'}}>⇚</Grid>
                <Grid item xs={10} style={{textAlign: 'center', backgroundColor: '#FFF', cursor: 'progress', lineHeight: '76px', fontSize: '60px'}}><span style={{color: '#FCAD56'}}>{situationState.mood}</span></Grid>
                <Grid item xs={1} onClick={e => nextMoodboard()} style={{borderBottom: '1px solid rgb(252, 173, 86)', fontSize: '60px', textAlign: 'center', color: '#FCAD56', cursor: 'ne-resize'}}>⇛</Grid>
              </Grid>
            <SituationState situation={situation} situationState={situationState}/>
            </React.Fragment>
          ): ( null )}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}