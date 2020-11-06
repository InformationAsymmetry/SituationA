import React from 'react';
import { useState } from 'react';
import { Situation } from './Situation';
import { useMulti2 } from 'meteor/vulcan:core';
import Grid from '@material-ui/core/Grid';

export const TheSituation = () => {
  const { results, loading } = useMulti2({ 
    collectionName: 'Situations', 
    fragmentName: 'SituationsFragment',
    input: {limit: 2}
    
  });
  
  let situation;
  const [currentSituationIndex, setCurrentSituationIndex] = useState(0);
  if(!loading && results) {
    situation = results[currentSituationIndex];
  }
   const prevSituation = () => {
    let newSituationIndex = currentSituationIndex - 1;
    if( newSituationIndex < 0 ) {
      setCurrentSituationIndex(results.length-1);
    }
    else setCurrentSituationIndex(newSituationIndex);
  }
  const nextSituation = () => {
    let newSituationIndex = currentSituationIndex + 1;
    if( newSituationIndex >= results.length ) {
      setCurrentSituationIndex(0);
    }
    else setCurrentSituationIndex(newSituationIndex);
  }
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={6} onClick={e => prevSituation()} className={'prev-situation'}>
          <div className={'arrow'}>◀</div>
        </Grid>
        <Grid item xs={6} onClick={e => nextSituation()} className={'next-situation'}>
          <div className={'arrow'}>▻</div>
        </Grid>
      </Grid>
      { situation ? (
        <Situation situation={situation} tradeRequests={situation.tradeRequests}/>
      ): null }
    </React.Fragment>
  )
}