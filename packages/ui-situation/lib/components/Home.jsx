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
    <h1 style={{margin: "0", padding: "30px 0px", border: "3px solid #EF3340", backgroundColor: "#198a00ff", color: "#FCAD56", borderRight: "13px solid rgb(239, 125, 0)", borderLeft: "13px solid rgb(239, 125, 0)"}}>
      <span style={{float: "left", height: "52px", width: "10px", backgroundColor: "rgb(252, 173, 86)"}}></span>
      <span style={{float: "left", height: "82px", width: "10px", backgroundColor: "rgb(239, 51, 64)", marginRight: "30px"}}></span>
      the
      <span style={{color: "rgb(239, 125, 0)", textDecoration: "underline", textDecorationColor: "rgb(239, 51, 64)"}}><span style={{color: "rgb(239, 51, 64)", textDecorationColor: "rgb(252, 173, 86)"}}>Sit</span>uation</span>
      <span style={{color: "rgb(239, 125, 0)", lineHeight: "34px", fontSize: "28px", padding: "0 35px", color: "rgb(252, 173, 86)", float: "right"}}>a11M1N3</span>
      <span style={{float: "right", height: "82px", width: "10px", marginTop: "-29px", backgroundColor: "rgb(239, 51, 64)"}}></span>
      <span style={{float: "right", height: "52px", width: "10px", marginTop: "-16px", backgroundColor: "rgb(252, 173, 86)"}}></span>
    </h1>
    <hr style={{color: "#009E49"}}></hr>
    <hr style={{color: "rgb(252, 173, 86)"}}></hr>
  </React.Fragment>
)