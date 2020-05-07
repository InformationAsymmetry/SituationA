import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const Home = () => (
  <React.Fragment>
    <h1>Situations List</h1>
    <hr></hr>
    <Components.SituationList />
  </React.Fragment>
)

registerComponent({ name: 'Home', component: Home});