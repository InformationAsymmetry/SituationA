import { addRoute } from 'meteor/vulcan:core';

addRoute({ name: 'home', path: '/', componentName: 'Home' });

addRoute({ name: 'situationOperator', path: '/operator/theSituation', componentName: 'SituationOperator' });
addRoute({ name: 'theSituation', path: '/theSituation', componentName: 'theSituation', layoutName: 'theSituationLayout' });