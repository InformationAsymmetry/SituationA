import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment SituationStatesFragment on SituationState {
     _id
     createdAt
     moodboardImageUrls
     mood
     situation {
       _id
       name
     }
   }
`);
