import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('Header component renders without crashing', () => {
	const shallowComponent = toJson(shallow(<Header />));
  expect(shallowComponent).toMatchSnapshot();
});