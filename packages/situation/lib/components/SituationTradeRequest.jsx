import React from 'react';
import { Components } from 'meteor/vulcan:core';
import { useState } from 'react';

export const SituationTradeRequest = ({ situation, tradeRequest }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <React.Fragment>
      {isEditing ? (
        <React.Fragment>
          <a onClick={e => setIsEditing(false)}><span style={{float: 'right', backgroundColor: 'grey', cursor: 'crosshair', padding: '5px', borderRadius: '2px'}}>🌋</span></a>
          <Components.SmartForm collectionName='TradeRequests' fields={['text', 'mood']} documentId={tradeRequest._id} successCallback={document => {setIsEditing(false);}}/>
        </React.Fragment>
      ): (
        <React.Fragment>
          <p><a onClick={e => setIsEditing(true)}><span style={{ paddingRight: '20px', cursor: 'crosshair', padding: '5px', borderRadius: '2px' }}>🌋</span></a> {tradeRequest.updatedAt && new Date(tradeRequest.updatedAt).toLocaleTimeString() + ' | '} <span style={{color: 'gray', paddingRight: '7px'}}>{new Date(tradeRequest.createdAt).toLocaleTimeString()}</span></p>
          <div className={['row']} style={{textAlign: 'center', borderBottom: '1px solid gray', paddingBottom: '14px' }}>
            <div className={['col-xs-3 col-sm-2']} style={{color: '#ef7d00ff', cursor: 'cell', fontSize: '30px'}}>{tradeRequest.mood}</div>
            <div className={['col-xs-9 col-sm-10']} style={{fontSize:'30px', borderRight: '1px solid gray', borderBottom: '1px solid gray', borderLeft: '4px solid rgb(239, 51, 64)'}}>{tradeRequest.text}</div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}