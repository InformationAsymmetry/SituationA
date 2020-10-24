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
  updatedAt: {
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
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  isActive: {
    type: Boolean,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  isHighlighted: {
    type: Boolean,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  tr: {
    type: String,
    optional: true,
    hidden: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'tradeRequests',
      type: '[TradeRequest]',
      relationship: 'hasMany',
      resolver: (situation, args, context) => {
        return context.TradeRequests.find({situationId: situation._id}, {sort: {updatedAt: -1}}).fetch();
      }
    }
  },
  ss: {
    type: String,
    optional: true,
    hidden: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'situationStates',
      type: '[SituationState]',
      relationship: 'hasMany',
      resolver: (situation, args, context) => {
        return context.SituationStates.find({situationId: situation._id}, {sort: {updatedAt: -1}}).fetch();
      }
    }
  }
  
};

export default schema;
