import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment SituationsFragment on Situation {
     _id
     createdAt
     name
     isActive
     isHighlighted
     tradeRequests {
       _id
       text
       mood
       updatedAt
       createdAt
     }
     situationStates {
       _id
       mood
       moodboardUrl
     }
   }
`);
