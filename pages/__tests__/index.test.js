/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../index';

describe('shows "Next App"', () => {
  it('App shows "Next App"', () => {
    const app = shallow(<App />);

    expect(app.find('h1').text()).toEqual('Next App');
  });
});

describe('With Snapshot Testing', () => {
  it('App shows "Next App"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
