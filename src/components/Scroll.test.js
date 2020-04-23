import React from 'react';
import Scroll from './Scroll';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('Scroll component renders without crashing', () => {
	const shallowComponent = toJson(shallow(<Scroll />));
  expect(shallowComponent).toMatchSnapshot();
});