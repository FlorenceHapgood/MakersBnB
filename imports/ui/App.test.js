import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import chai from 'chai';
import { Spaces } from '../api/spaces.js';
import chaiEnzyme from 'chai-enzyme';
import App from './App.js';
import sinon from 'sinon';
import { Meteor } from 'meteor/meteor';

chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

describe('App', () => {
  // beforeEach(function(){
  //   sinon.stub(Meteor, "subscribe").returns({
  //     subscriptionID: 0,
  //     ready: () => true,
  //   });
  // });

  it('should render a form for adding a space', () => {
    // const appUI = shallow(<App/>);
    // chai.expect(appUI).to.have.ref('nameInput')
  });
});
