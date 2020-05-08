import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment TradeRequestsFragment on TradeRequest {
     _id
     createdAt
     updatedAt
     text
     mood
     situation {
       _id
       name
       isActive
       isHighlighted
     }
   }
`);
