import React from 'react';
import { useMulti2 } from 'meteor/vulcan:core';
import { Situation } from './Situation';

export const SituationList = () => {
  const { results, loading } = useMulti2({ 
    collectionName: 'Situations', 
    fragmentName: 'SituationsFragment',  
  });

  return (
    <React.Fragment>
      {!loading && results.map( situation => (
        <React.Fragment  key={situation._id}>
          <Situation situation={situation} tradeRequests={situation.tradeRequests}/>
          <hr></hr>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}