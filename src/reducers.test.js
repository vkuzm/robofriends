import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
	const initalStateSearchRobots = {
		searchField: ''
	}

	it('should return the initial state', () => {
		const payload = '';
		const action = {};

		expect(reducers.searchRobots(initalStateSearchRobots, action))
			.toEqual(initalStateSearchRobots);
	})

	it('should handle CHANGE_SEARCH_FIELD action', () => {
		const payload = 'John';
		const action = {type: CHANGE_SEARCH_FIELD, payload: payload};

		expect(reducers.searchRobots(initalStateSearchRobots, action))
			.toEqual({searchField: payload});
	})
})


describe('requestRobots', () => {
	const initalStateRequestRobots = {
		isPending: false,
		robots: [],
		error: ''
	}

	it('should return the initial state', () => {
		const payload = '';
		const action = {};

		expect(reducers.requestRobots(initalStateRequestRobots, action))
			.toEqual(initalStateRequestRobots);
	})

	it('should handle REQUEST_ROBOTS_PENDING action', () => {
		const action = {type: REQUEST_ROBOTS_PENDING, payload: {}};

		expect(reducers.requestRobots(initalStateRequestRobots, action))
			.toEqual({
				isPending: true,
				robots: [],
				error: ''
			});
	})

	it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
		const payload = [
			{
				id: 1,
				name: 'John',
				email: 'john@mail.com'
			},
			{
				id: 2,
				name: 'Max',
				email: 'max@mail.com'
			}
		];
		const action = {type: REQUEST_ROBOTS_SUCCESS, payload: payload};

		expect(reducers.requestRobots(initalStateRequestRobots, action))
			.toEqual({
				isPending: false,
				robots: payload,
				error: ''
			});
	})

	it('should handle REQUEST_ROBOTS_FAILED action', () => {
		const payload = {errorCode: 400, errorMessage: 'Error Message'};
		const action = {type: REQUEST_ROBOTS_FAILED, payload: payload};

		expect(reducers.requestRobots(initalStateRequestRobots, action))
			.toEqual({
				isPending: false,
				robots: [],
				error: payload
			});
	})
})