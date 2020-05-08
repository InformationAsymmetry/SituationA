import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment SituationStatesFragment on SituationState {
     _id
     createdAt
     updatedAt
     moodboardUrl
     mood
     isActive
     isHighlighted
     situation {
       _id
       name
       isActive
       isHighlighted
     }
   }
`);
