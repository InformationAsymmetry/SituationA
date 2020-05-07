import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import Grid from '@material-ui/core/Grid';

const Situation = ({ situation }) => (
  <React.Fragment>
    <Grid container spacing={3} style={{borderBottom: "12px solid rgb(239, 51, 64)"}}>
      <Grid item xs={12} sm={6} style={{borderLeft: "8px solid rgb(252, 173, 86)"}}>
        <Components.SituationStates situation={situation} situationStates={situation.situationStates}/>
        <hr style={{color: "#EF3340"}}></hr>
        <Components.SmartForm collectionName="SituationStates" prefilledProps={{situationId: situation._id}} fields={["mood", "moodboardUrl"]}/>
      </Grid>
      <Grid item xs={12} sm={6} style={{textAlign: "right", paddingTop: "3px", paddingRight: "20px"}}>
        <div style={{borderRight: "solid 6px rgb(252, 173, 86)"}}>
          <hr style={{color: "#EF3340"}}></hr>
          <div style={{textAlign: "center", color: "rgb(252, 173, 86)", fontSize: "30px"}}>Trade Requests</div>
          <hr style={{color: "#EF3340", backgroundColor: "#FFF"}}></hr>
        </div>
        <div style={{backgroundColor: "#FFF", borderLeft: "solid 3px rgb(252, 173, 86)", padding: "5px 10px 37px 15px"}}>
          <Components.SituationTradeRequests situation={situation} tradeRequests={situation.tradeRequests}/>
        </div>
        <hr style={{color: "#009E49"}}></hr>
        <div style={{padding: "15px", borderLeft: "solid 3px rgb(239, 51, 64)"}}>
          <Components.SmartForm collectionName="TradeRequests" prefilledProps={{situationId: situation._id}} fields={["mood", "text"]}/>
        </div>
      </Grid>
    </Grid>
  </React.Fragment>
)

registerComponent({ name: 'Situation', component: Situation });