const schema = {
  // default properties

  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: ({ newDocument, currentUser}) => {
      return new Date();
    }
  },
  name: {
    type: String,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  mood: {
    type: String,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  tradeRequests: {
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: "tradeRequests",
      type: "[TradeRequest]",
      relationship: "hasMany",
      resolver: (situation, args, context) => {
        return context.TradeRequests.find({situationId: situation._id}).fetch();
      }
    }
  },
  situationStates: {
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: "situationStates",
      type: "[SituationState]",
      relationship: "hasMany",
      resolver: (situation, args, context) => {
        return context.SituationStates.find({situationId: situation._id}).fetch();
      }
    }
  }
  
};

export default schema;
