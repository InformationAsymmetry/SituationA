import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { useState } from 'react';

const SituationTradeRequest = ({ situation, tradeRequest }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <React.Fragment>
      {isEditing ? (
        <React.Fragment>
          <a onClick={e => setIsEditing(false)}><span style={{float: "right", backgroundColor: "grey", cursor: "crosshair", padding: "5px", borderRadius: "2px"}}>🌋</span></a>
          <Components.SmartForm collectionName='TradeRequests' fields={["text", "mood"]} documentId={tradeRequest._id} successCallback={document => {setIsEditing(false);}}/>
        </React.Fragment>
      ): (
        <React.Fragment>
          <p><a onClick={e => setIsEditing(true)}><span style={{ paddingRight: "20px", cursor: "crosshair", padding: "5px", borderRadius: "2px" }}>🌋</span></a> {tradeRequest.updatedAt && new Date(tradeRequest.updatedAt).toLocaleTimeString() + " | "} <span style={{color: "gray"}}>{new Date(tradeRequest.createdAt).toLocaleTimeString()}</span></p>
          <p style={{textAlign: "left", fontSize: "30px"}}><span style={{color: "#ef7d00ff", cursor: "cell"}}>{tradeRequest.mood}</span> {tradeRequest.text}</p>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

registerComponent({ name: 'SituationTradeRequest', component: SituationTradeRequest });