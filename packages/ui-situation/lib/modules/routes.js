import { addRoute } from 'meteor/vulcan:core';
import theSituation from 'meteor/shielkwamm:situation';
import SituationOperator from 'meteor/shielkwamm:situation';


addRoute({ name: 'home', path: '/', componentName: 'Home' });

addRoute({ name: 'situationOperator', path: '/operator/theSituation', component: SituationOperator });
addRoute({ name: 'theSituation', path: '/theSituation', component: theSituation, layoutName: 'theSituationLayout' });