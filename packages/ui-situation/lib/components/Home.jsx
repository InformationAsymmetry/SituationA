import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const Home = () => (
  <React.Fragment>
    <h1>UI Material Vulcan Starter</h1>
    <a href={"https://github.com/Neobii/UI-Material-Vulcan-Starter.git"}>Github</a>
    <Components.SituationList />
  </React.Fragment>
)

registerComponent({ name: 'Home', component: Home});