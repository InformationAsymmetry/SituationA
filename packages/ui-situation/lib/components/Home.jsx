import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';

const Home = ({ currentUser }) => (
  <React.Fragment>
    <SituationHeader />
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

const SituationHeader = () => (
  <React.Fragment>
    <h1 style={{margin: "0", padding: "41px", border: "3px solid #EF3340", backgroundColor: "#198a00ff", color: "#FCAD56"}}>theSituation</h1>
    <hr style={{color: "#009E49"}}></hr>
    <hr style={{color: "rgb(252, 173, 86)"}}></hr>
  </React.Fragment>
)