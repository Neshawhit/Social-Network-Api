const { Schema, model } = require('mongoose');

// user model schema
const user = new Schema(
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
    match: [, 'Must match a valid email address (look into Mongoose matching validation'],
 },
 thoughts: {
    type: Schema.Types.ObjectId,
    ref: 'Thought',
    // Array of _id values referencing the Thought model
    // friends
 },
friends: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // Array of _id values referencing the User model (self-reference),
}
    
  }
);
// Create a virtual called friendCount 
user
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.tags.length;
  });

// Initialize our User model
const User = model('user', user);

module.exports = User;
