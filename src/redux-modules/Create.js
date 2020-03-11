import {
    createStore,
    applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './Reducers';
import clientMiddleware from './middlewares/ClientMiddleware';

export default function configureStore(client, initialState = {}) {
    // Create the store with two middlewares
    const middlewares = [
        clientMiddleware(client),
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(...enhancers),
    );

    // Extensions
    store.asyncReducers = {}; // Async reducer registry

    return store;
}
