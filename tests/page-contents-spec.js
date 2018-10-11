// function countLists() {
//   browser.waitForExist('.list-todo');
//   const elements = browser.elements('.list-todo');
//   return elements.value.length;
// };
//
// describe('list ui', function () {
//   beforeEach(function () {
//     browser.url('http://localhost:3000');
//     server.call('generateFixtures');
//   });
//
//   it('can create a list @watch', function () {
//     const initialCount = countLists();
//
//     browser.click('.js-new-list');
//
//     assert.equal(countLists(), initialCount + 1);
//   });
// });

// import chai from 'chai';
// import { $ } from 'meteor/jquery';
//
// describe ("the spaces page : page contents", function() {
//
//   it ("should include a page title of 'Spaces'", function() {
//     expect($('title').text()).toEqual('Spaces');
//   });
//
//   it ("should include a page heading of 'Spaces'", function() {
//     expect($('h1').text()).toEqual('Spaces');
//   });
//
//   it ("should include an unordered list for displaying the tasks", function() {
//     expect($('ul').length).toEqual(1);
//   });
//
// });

// import { Factory } from 'meteor/dburles:factory';
// import React from 'react';
// import { shallow } from 'enzyme';
// import chai from 'chai';
// import TodoItem from './TodoItem.jsx';
//
// describe('Spaces', () => {
//   it('should render', () => {
//     const todo = Factory.build('todo', { text: 'testing', checked: false });
//     const item = shallow(<TodoItem todo={todo} />);
//     chai.assert(item.hasClass('list-item'));
//     chai.assert(!item.hasClass('checked'));
//     chai.assert.equal(item.find('.editing').length, 0);
//     chai.assert.equal(item.find('input[type="text"]').prop('defaultValue'), 'testing');
//   });
// });
