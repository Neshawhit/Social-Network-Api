const { Schema, model } = require('mongoose');

// user model schema
const userSchema = new Schema(
  {username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
 email: {
    type: String,
    required: true,
    unique: true,
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/], 
 },
 thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thought',
    // Array of _id values referencing the Thought model
    // friends
 }],
friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    // Array of _id values referencing the User model (self-reference),
}],
    
  },{
    toJSON: {
      virtuals:true,
      getters: true
    },
    id:false
  }
);
  const User = model('User', userSchema);


  // userSchema.virtual('friendCount').get(function () {
  //   return.this.friends.length;
  // })
// Create a virtual called friendCount 
userSchema.virtual('friendCount') .get(function () {
    return this.friends.length;
  });

// Initialize our User model
// const User = model('User', userSchema);

module.exports = User;
