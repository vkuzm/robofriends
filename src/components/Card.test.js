import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
	const mockRobot = {
		id: 100500,
		name: 'Robo',
		email: 'robo@mail.com'
	}

	const shallowComponent = toJson(shallow(
		<Card 
			key={mockRobot.id} 
		  id={mockRobot.id} 
		  name={mockRobot.name} 
		  email={mockRobot.email}
		/>));

  expect(shallowComponent).toMatchSnapshot();
});