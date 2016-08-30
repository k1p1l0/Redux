import { applyMiddleware, combineReducers, createStore } from "redux";

const userReducer = (state={}, action) => {
	switch (action.type) {
		case 'CHANGE_NAME': {
			state = Object.assign({}, state, {name: action.payload});
			break;
		}
		case 'CHANGE_AGE': {
			state = Object.assign({}, state, {age: action.payload});
			break;
		}
		case 'E': {
			throw new Error('AHHHHHHHHHHHH!');
		}
	}
	return state;
};

const tweetsReducer = (state=[], actions) => {
	return state;
};

const reducers = combineReducers({
	user: userReducer,
	tweet: tweetsReducer
});

const logger = (store) => (next) => (action) => {
	console.log('action fired', action);
	next(action);
};

const error = (store) => (next) => (action) => {
	try { 
		next(action);
	} catch (e) {
		console.log('AHHHH!', e);
	}
};

const middleware = applyMiddleware(logger, error);

const store = createStore(reducers, {}, middleware);

store.subscribe(() => {
	console.log('Store changed', store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: 'Nikolay'});
store.dispatch({type: "CHANGE_AGE", payload: 35});
store.dispatch({type: "CHANGE_AGE", payload: 36});
store.dispatch({type: "E", payload: 36});