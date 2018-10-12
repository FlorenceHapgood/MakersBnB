import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import chai from 'chai';
import { Spaces } from '../api/spaces.js';
import chaiEnzyme from 'chai-enzyme'
import App from './App.js';
import sinon from 'sinon';
import { Meteor } from 'meteor/meteor';

chai.use(chaiEnzyme())

configure({ adapter: new Adapter() });

describe('App', () => {
  beforeEach(function(){
    sinon.stub(Meteor, "subscribe").returns({
      subscriptionID: 0,
      ready: () => true,
    });
  });

  it('should render a form for adding a space', () => {
//    Factory.define('spaces', Spaces, {});
    // const space = Factory.build('spaces', {
    //   username: 'testuser1',
    //   name: 'Test Space 1',
    //   description: 'Test Space 1 Description',
    //   price: '49.95'
    // });

    const appUI = shallow(<App/>);
//    console.log(spaceUI);
    //chai.assert(spaceUI.hasClass('space'));
    //chai.assert.equal(spaceUI.find('.editing').length, 0);
    chai.expect(appUI).to.have.ref('nameInput')
    // chai.expect(spaceUI.find('.space-description')).to.have.text('Test Space 1 Description');
    // chai.expect(spaceUI.find('.space-price span')).to.have.text('49.95');
    // chai.expect(spaceUI.find('.space-owner p')).to.have.text('testuser1');
  });
});
