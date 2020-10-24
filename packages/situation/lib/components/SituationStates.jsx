import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { useState } from 'react';
import { SituationState } from './SituationState';

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
               <div className={['row']} style={{ marginTop: '-8px' }}>
                <div className={['col-xs-1']} onClick={e => prevMoodboard()} style={{borderRight: '3px solid rgb(239, 125, 0)', borderBottom: '1px solid rgb(252, 173, 86)', textAlign: 'center', fontSize: '60px', color: '#FCAD56', cursor: 'nw-resize'}}>⇚</div>
                <div className={['col-xs-10']} style={{textAlign: 'center', backgroundColor: '#FFF', cursor: 'progress', lineHeight: '76px', fontSize: '60px'}}><span style={{color: '#FCAD56'}}>{situationState.mood}</span></div>
                <div className={['col-xs-1']} onClick={e => nextMoodboard()} style={{borderBottom: '1px solid rgb(252, 173, 86)', fontSize: '60px', textAlign: 'center', color: '#FCAD56', cursor: 'ne-resize'}}>⇛</div>
              </div>
            <SituationState situation={situation} situationState={situationState}/>
            </React.Fragment>
          ): ( null )}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}