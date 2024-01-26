// store.js

import { combineReducers, createStore } from 'redux';

// 예제 리듀서
const counterReducer = () => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    counter: counterReducer,
    // 다른 리듀서 추가 가능
});

const store = createStore(rootReducer);

export default store;
