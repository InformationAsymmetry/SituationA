import React from 'react';
import { Components, useCurrentUser } from 'meteor/vulcan:core';
import { TheSituationHeader } from './TheSituationHeader';

export const TheSituationLayout = ({ children }) => {
  const { currentUser } = useCurrentUser();
  return (
    <React.Fragment>
      <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
        <div style={{backgroundColor: '#FFF'}}>
          <TheSituationHeader />
        </div>
        <div flex={1} style={{backgroundColor: 'rgb(25, 138, 0)'}}>
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
}