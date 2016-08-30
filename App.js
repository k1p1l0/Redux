import { combineReducers, createStore } from "redux";

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

const store = createStore(reducers);

store.subscribe(() => {
	console.log('Store changed', store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: 'Nikolay'});
store.dispatch({type: "CHANGE_AGE", payload: 35});
store.dispatch({type: "CHANGE_AGE", payload: 36});
