import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
import './index.css';

//const logger = createLogger();

const rootReducer = combineReducers({searchRobots	, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

serviceWorker.unregister();
