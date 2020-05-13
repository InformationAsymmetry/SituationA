import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';

const theSituationLayout = ({ currentUser, children }) => (
  <React.Fragment>
    <div style={{display:"flex", flexDirection:"column", minHeight:"100vh"}}>
      <div style={{backgroundColor: "#FFF"}}>
    <Components.theSituationHeader />
    </div>
    <div flex={1} style={{backgroundColor: "rgb(25, 138, 0)"}}>
    {currentUser ? (
      <div >
        { children }
      </div>
    ) : (
      <Components.AccountsLoginForm />
    )}
    </div>
    </div>
  </React.Fragment>
)

registerComponent({ name: 'theSituationLayout', component: theSituationLayout, hocs: [withCurrentUser] });