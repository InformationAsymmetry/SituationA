import React from 'react';
import { Components, useCurrentUser } from 'meteor/vulcan:core';
import { SituationList } from 'meteor/shielkwamm:situation';

import { TheSituationHeader } from './TheSituationHeader'

export const Home = () => {
  const { currentUser } = useCurrentUser();
  return (
  <React.Fragment>
    <TheSituationHeader />
    {currentUser ? (
      <div style={{backgroundColor: 'rgb(25, 138, 0)'}}>
        <SituationList />
      </div>
    ) : (
      <Components.AccountsLoginForm />
    )}
  </React.Fragment>
  )
}