import { addRoute } from 'meteor/vulcan:core';
import { TheSituation } from 'meteor/shielkwamm:situation';
import { SituationOperator } from 'meteor/shielkwamm:situation';
import { TheSituationLayout } from '../components/TheSituationLayout';

import { Home } from '../components/Home'

addRoute({ name: 'home', path: '/', component: Home });

addRoute({ name: 'situationOperator', path: '/operator/theSituation', component: SituationOperator });

addRoute({ name: 'theSituation', path: '/theSituation', component: TheSituation, layoutComponent: TheSituationLayout });