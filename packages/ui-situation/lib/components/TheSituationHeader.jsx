import React from 'react';
import { useCurrentUser, Components } from 'meteor/vulcan:core';
import Helmet from 'react-helmet';


export const TheSituationHeader = () => {
  const { currentUser } = useCurrentUser();
  return (
  <React.Fragment>
    <Components.HeadTags title={"theSituation"}/>
    <Helmet>
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      <link rel="manifest" href="/manifest.json"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/>
    </Helmet>
    <h1 style={{margin: '0', padding: '30px 0px', border: '3px solid #EF3340', backgroundColor: '#198a00ff', color: '#FCAD56', borderRight: '13px solid rgb(239, 125, 0)', borderLeft: '13px solid rgb(239, 125, 0)'}}>
      <span style={{float: 'left', height: '52px', width: '10px', backgroundColor: 'rgb(252, 173, 86)'}}></span>
      <span style={{float: 'left', height: '82px', width: '10px', backgroundColor: 'rgb(239, 51, 64)', marginRight: '30px'}}></span>
      the
      <span style={{color: 'rgb(239, 125, 0)', textDecoration: 'underline', textDecorationColor: 'rgb(239, 51, 64)'}}><span style={{color: 'rgb(239, 51, 64)', textDecorationColor: 'rgb(252, 173, 86)'}}>Sit</span>uation</span>
      <span style={{lineHeight: '34px', fontSize: '28px', padding: '0 35px', color: 'rgb(239, 51, 64)', float: 'right', backgroundColor: 'rgb(252, 173, 86)' }}><span style={{backgroundColor: 'rgb(252, 173, 86)'}}>↼ a11M</span><span style={{backgroundColor: 'rgb(25, 138, 0)', color: 'rgb(252, 173, 86)'}}>1N3</span>⇁</span>
      <span style={{float: 'right', height: '82px', width: '10px', marginTop: '-29px', backgroundColor: 'rgb(239, 51, 64)'}}></span>
      <span style={{float: 'right', height: '52px', width: '10px', marginTop: '-16px', backgroundColor: 'rgb(252, 173, 86)'}}></span>
    </h1>
    <hr style={{color: '#009E49'}}></hr>
    <hr style={{color: 'rgb(252, 173, 86)'}}></hr>
  </React.Fragment>
  )
}