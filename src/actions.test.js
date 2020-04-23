import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants';

import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
	const text = 'It is text for action';
	const expectedAction = {
		type: CHANGE_SEARCH_FIELD,
		payload: text
	}

	expect(actions.setSearchField(text)).toEqual(expectedAction);
})

it('should handle requesting robots API', () => {
	const store = mockStore();
	store.dispatch(actions.requestRobots());

	const storeActions = store.getActions();
	const expectedAction = {
		type: REQUEST_ROBOTS_PENDING
	}

	expect(storeActions[0]).toEqual(expectedAction);
})