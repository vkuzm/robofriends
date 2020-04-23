import React from 'react';
import MainPage from './MainPage';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const mockGlobalProps = {
	onRequestRobots: jest.fn(),
	robots: [],
	searchField: '',
	isPending: false,
	error: null
}


it('expect to render MainPage component', () => {
	const wrapper = shallow(<MainPage {...mockGlobalProps} />);
	expect(toJson(wrapper)).toMatchSnapshot();
});


it('should shows error message when error has occurred', () => {
	const errorMessage = 'Error message';
	const mockProps = Object.assign({}, mockGlobalProps, { error: {message: errorMessage} });
	const wrapper = shallow(<MainPage {...mockProps} />);

	expect(toJson(wrapper)).toMatchSnapshot();
	expect(wrapper.find('[className="tc pa5 ma5"]').text()).toEqual(errorMessage);
});


it('should shows loading message when status is pending', () => {
	const pendingMessage = 'Loading...';
	const mockProps = Object.assign({}, mockGlobalProps, { isPending: true });
	const wrapper = shallow(<MainPage {...mockProps} />);

	expect(toJson(wrapper)).toMatchSnapshot();
	expect(wrapper.find('[className="tc pa5 ma5"]').text()).toEqual(pendingMessage);
});


it('should filters robots correctly', () => {
	const mockProps = Object.assign({}, mockGlobalProps, {
		robots: [{
			id: 1,
			name: 'Max',
			email: 'max@mail.com'
		},
		{
			id: 2,
			name: 'Martin',
			email: 'martin@mail.com'
		}],
		searchField: 'm',
	});

	const wrapper = shallow(<MainPage {...mockProps} />);
	expect(wrapper.instance().filterRobots()).toEqual(mockProps.robots);
});

it('should filters robots and returns empty array when does not find anything', () => {
	const mockProps = Object.assign({}, mockGlobalProps, {
		robots: [{
			id: 1,
			name: 'Max',
			email: 'max@mail.com'
		}],
		searchField: 'f',
	});

	const wrapper = shallow(<MainPage {...mockProps} />);
	expect(wrapper.instance().filterRobots()).toEqual([]);
});