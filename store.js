import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

export default (initialState = {}) => {
    return createStore(
        reducer,
        initialState,

        composeWithDevTools()
    );
};
