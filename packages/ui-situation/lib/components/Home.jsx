import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const Home = () => (
  <React.Fragment>
    <h1 style={{margin: "0", padding: "41px", border: "3px solid #EF3340", backgroundColor: "#198a00ff", color: "#FCAD56"}}>theSituation</h1>
    <hr style={{color: "#EF3340 "}}></hr>
    <Components.SituationList />
  </React.Fragment>
)

registerComponent({ name: 'Home', component: Home});