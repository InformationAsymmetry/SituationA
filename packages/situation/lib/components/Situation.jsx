import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import Grid from '@material-ui/core/Grid';

const Situation = ({ situation }) => (
  <React.Fragment>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Components.SituationStates situation={situation} situationStates={situation.situationStates}/>
        <hr></hr>
        <Components.SmartForm collectionName="SituationStates" prefilledProps={{situationId: situation._id}} fields={["mood", "moodboardUrl"]}/>
      </Grid>
      <Grid item xs={12} sm={6} style={{textAlign: "right"}}>
        <h2>Trade Requests</h2>
        <Components.SituationTradeRequests situation={situation} tradeRequests={situation.tradeRequests}/>
        <hr></hr>
        <Components.SmartForm collectionName="TradeRequests" prefilledProps={{situationId: situation._id}} fields={["mood", "text"]}/>
      </Grid>
    </Grid>
  </React.Fragment>
)

registerComponent({ name: 'Situation', component: Situation });