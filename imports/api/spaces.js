import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const Spaces = new Mongo.Collection('spaces');

Meteor.methods({
  'spaces.insert'(name, description, price) {
    check(name, String);
    check(description, String);
    check(price, String);
    // Make sure the user is logged in before listing a space
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

      Spaces.insert({
        name: name,
        createdAt: new Date(),// current time
        description: description,
        price: price,
        owner: this.userId,           // _id of logged in user
        username: Meteor.users.findOne(this.userId).username,  // username of logged in user
      });
  },
});
