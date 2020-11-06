import React from 'react';
import { Components } from 'meteor/vulcan:core';
import { SituationStates } from './SituationStates';
import { SituationTradeRequests } from './SituationTradeRequests';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export const Situation = ({ situation }) => (
  <React.Fragment>
    <Grid container className={'situation-container'}>
      <Grid container item xs={12} md={6} className={'states'}>
        <SituationStates situation={situation} situationStates={situation.situationStates}/>
        <Grid item xs={12}>
        <hr className={'zred'}></hr>
        
          <Components.SmartForm collectionName="SituationStates" prefilledProps={{situationId: situation._id}} fields={['mood', 'moodboardUrl']}/>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={6} className={'trade-requests'}>
        <Grid item xs={12} className={'noises'}>
          <hr></hr>
          <div className={'noise'}><span className={'red-capital'}>N</span>o<span className={'yello red-border-verticle'}>Is</span><span className={'red yellow-border-bottom'}>e</span><span style={{borderTop: 'none'}}>E</span>s</div>
          <hr></hr>
        </Grid>
        <Box width={1} className={'requests-container'}>
          <SituationTradeRequests situation={situation} tradeRequests={situation.tradeRequests}/>
        </Box>
        <hr className={'zgreen'}></hr>
        <Box width={1} className={'insert-form'}>
          <Components.SmartForm collectionName="TradeRequests" prefilledProps={{situationId: situation._id}} fields={['mood', 'text']}/>
        </Box>
      </Grid>
    </Grid>
  </React.Fragment>
)