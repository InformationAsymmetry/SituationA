import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import Box from '@material-ui/core/Box';

const theSituationLayout = ({ currentUser, children }) => (
  <React.Fragment>
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box style={{backgroundColor: "#FFF"}}>
    <Components.theSituationHeader />
    </Box>
    <Box flex={1} style={{backgroundColor: "rgb(25, 138, 0)"}}>
    {currentUser ? (
      <div >
        { children }
      </div>
    ) : (
      <Components.AccountsLoginForm />
    )}
    </Box>
    </Box>
  </React.Fragment>
)

registerComponent({ name: 'theSituationLayout', component: theSituationLayout, hocs: [withCurrentUser] });