import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment TradeRequestsFragment on TradeRequest {
     _id
     createdAt
     text
     mood
     situation {
       _id
       name
     }
   }
`);
