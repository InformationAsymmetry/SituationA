import Users from 'meteor/vulcan:users';
import { createMutator } from 'meteor/vulcan:core';
import { getCollection } from 'meteor/vulcan:lib';

Meteor.startup(() => {
  const Situations = getCollection('Situations');
  const SituationStates = getCollection('SituationStates');
  const TradeRequests = getCollection('TradeRequests');
  if(!Situations.findOne()) {
    situations.forEach( situation => {
      let situationId = Situations.insert({name: situation.name, isActive: situation.isActive, isHighlighted: situation.isHighlighted, createdAt: new Date(), updatedAt: new Date()});
      situation.situationStates.forEach( situationState => {
        SituationStates.insert({ 
          situationId: situationId,
          mood: situationState.mood,
          moodboardUrl: situationState.moodboardUrl,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      });
      situation.tradeRequests.forEach( tradeRequests => {
        TradeRequests.insert({ 
          situationId: situationId, 
          mood: tradeRequests.mood,
          text: tradeRequests.text,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      })
    })
  }
});

const situations = [
  {
    name: "a11M1N3", 
    isActive: true, 
    situationStates: [
      {mood: "☴", moodboardUrl: "https://image.made-in-china.com/43f34j00rwLTOCytrqoB/9m3-Dongfeng-Concrete-Mixer-Truck-Cement-Mixer.webp"},
      {mood: "‾☴☴", moodboardUrl: "https://avatars2.githubusercontent.com/u/1931021?s=460&u=40af9ba38a8edc9d911f33b8ab6bab04eeb2c404&v=4"},
      {mood: "/x☴?+", moodboardUrl: "https://avatars3.githubusercontent.com/u/6634779?s=200&v=4"}
    ],
    tradeRequests: [
      {mood: "++☴", text: "SuperInstructor wishes to send BB some $$"},
      {mood: "+△☴☴", text: "Send concrete easward!"},
      {mood: "+△‾☴+", text: "World offers [-]👀 to Neobii"}
    ]
  },
  {
    name: "p1msluèr", 
    isHighlighted: true,
    situationStates: [
      {mood: "_[-]☴/x-", moodboardUrl: "https://i.pinimg.com/236x/eb/88/d3/eb88d3a9dfe5ebc07207eafd3e836670--s-cartoons-funniest-cartoons.jpg"},
      {mood: "_-/x_☴☴/xx--", moodboardUrl: "https://www.simplyrecipes.com/wp-content/uploads/2014/07/hard-boiled-eggs-horiz-800.jpg"},
      {mood: "---___☴☴☴___---", moodboardUrl: "https://image.shutterstock.com/image-photo/piece-cheese-isolated-260nw-224608219.jpg"}
    ],
    tradeRequests: [
    ]
  }
]