import React from 'react';
import CardList from './CardList';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('expect to render CardList shallowComponent', () => {
  const mockRobots = [
  	{
  		id: 1,
  		name: 'R2D2',
  		email: 'r2d2@mail.com'
  	},
  	{
  		id: 2,
  		name: '3P20',
  		email: '3p20@mail.com'
  	},
  	{
  		id: 3,
  		name: 'R8S2',
  		email: 'r8s2@mail.com'
  	}
  ]

	const shallowComponent = toJson(shallow(<CardList robots = {mockRobots} />));
  expect(shallowComponent).toMatchSnapshot();
});