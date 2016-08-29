import { createStore } from "redux";

const reducer = function (state, action) {
	return state+1;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
	console.log('Store changed', store.getState());
});

store.dispatch({type: "INC", payload: 1});