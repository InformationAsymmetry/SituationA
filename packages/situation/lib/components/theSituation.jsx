import React from 'react';
import { useState } from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

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
      <div className={["row"]}>
        <div onClick={e => prevSituation()} className={["prev-situation col-xs-6"]}>
          <div className={["arrow"]}>◀</div>
        </div>
        <div onClick={e => nextSituation()} className={["next-situation col-xs-6"]}>
          <div className={["arrow"]}>▻</div>
        </div>
      </div>
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