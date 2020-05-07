import Users from 'meteor/vulcan:users';
import { createMutator } from 'meteor/vulcan:core';
import { getCollection } from 'meteor/vulcan:lib';

Meteor.startup(() => {
  const Situations = getCollection('Situations');
  const SituationStates = getCollection('SituationStates');
  const TradeRequests = getCollection('TradeRequests');
  if(!Situations.findOne()) {
    situations.forEach( situation => {
      let situationId = Situations.insert({name: situation.name, createdAt: new Date(), updatedAt: new Date()});
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
  }
]