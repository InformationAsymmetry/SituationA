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
    onUpdate: ({ newDocument, currentUser}) => {
      return new Date();
    }
  },
  mood: {
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  text: {
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  situationId: {
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'situation',
      type: 'Situation',
      relationship: 'hasOne'
    }
  }
  // userId: {
  //   type: String,
  //   optional: true,
  //   canRead: ['guests'],
  //   resolveAs: {
  //     fieldName: 'user',
  //     type: 'User',
  //     resolver: (movie, args, context) => {
  //       return context.Users.findOne({ _id: movie.userId }, { fields: context.Users.getViewableFields(context.currentUser, context.Users) });
  //     },
  //     addOriginalField: true
  //   }
  // },
  
};

export default schema;
