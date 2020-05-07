import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment SituationStatesFragment on SituationState {
     _id
     createdAt
     moodboardUrl
     mood
     situation {
       _id
       name
     }
   }
`);
