import React from 'react';
import { Components } from 'meteor/vulcan:core';
import { SituationStates } from './SituationStates';
import { SituationTradeRequests } from './SituationTradeRequests';

export const Situation = ({ situation }) => (
  <React.Fragment>
    <div className={['row situation-container']}>
      <div className={['states row col-xs-12 col-md-6']}>
        <SituationStates situation={situation} situationStates={situation.situationStates}/>
        <hr className={['zred']}></hr>
        <Components.SmartForm collectionName="SituationStates" prefilledProps={{situationId: situation._id}} fields={['mood', 'moodboardUrl']}/>
      </div>
      <div className={['trade-requests row col-xs-12 col-md-6']}>
        <div className={['noises']}>
          <hr></hr>
          <div className={['noise']}><span className={['red-capital']}>N</span>o<span className={['yello red-border-verticle']}>Is</span><span className={['red yellow-border-bottom']}>e</span><span style={{borderTop: 'none'}}>E</span>s</div>
          <hr></hr>
        </div>
        <div className={['requests-container']}>
          <SituationTradeRequests situation={situation} tradeRequests={situation.tradeRequests}/>
        </div>
        <hr className={['zgreen']}></hr>
        <div className={['insert-form']}>
          <Components.SmartForm collectionName="TradeRequests" prefilledProps={{situationId: situation._id}} fields={['mood', 'text']}/>
        </div>
      </div>
    </div>
  </React.Fragment>
)