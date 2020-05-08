import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';

const Home = ({ currentUser }) => (
  <React.Fragment>
    <Components.theSituationHeader />
    {currentUser ? (
      <div style={{backgroundColor: "rgb(25, 138, 0)"}}>
        <Components.SituationList />
      </div>
    ) : (
      <Components.AccountsLoginForm />
    )}
  </React.Fragment>
)

registerComponent({ name: 'Home', component: Home, hocs: [ withCurrentUser ]});