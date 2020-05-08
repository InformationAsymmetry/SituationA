import React from 'react';
import { useState } from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import Grid from '@material-ui/core/Grid';

const theSituation = ({ loading, results }) => {
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
        <Grid onClick={e => prevSituation()} style={{
            backgroundImage: "linear-gradient(transparent 50%, rgb(252, 173, 86, 1) 50%)",
            backgroundSize: "2px 6px",
            height: "40px",
          }} item xs={6}><div style={{fontSize:"22px",
          animationName: "example", animationDuration: "4s", animationIterationCount: "infinite", paddingLeft: "5px"}}>◀</div></Grid>
        <Grid  onClick={e => nextSituation()} style={{ height: "40px", backgroundImage: "linear-gradient(transparent 50%, rgb(239, 51, 64) 50%)",
            backgroundSize: "2px 8px", textAlign: "right", }} item xs={6}><div style={{color: "#FFF", fontSize:"22px", animationName: "example", animationDuration: "4s", animationIterationCount: "infinite", paddingRight: "5px"}}>▻</div></Grid>
      </Grid>
      { situation ? (
        <Components.Situation situation={situation} tradeRequests={situation.tradeRequests}/>
      ): null }
    </React.Fragment>
  )
}

const options = {
  collectionName: "Situations",
  fragmentName: 'SituationsFragment',
  limit: 10
}

registerComponent({ name: 'theSituation', component: theSituation, hocs: [[withMulti2, options]] });