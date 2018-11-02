import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer as Reducer } from './reducer';
import Saga from './saga';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(Reducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    Object.keys(Saga).forEach(name => sagaMiddleware.run(Saga[name]));

    if (module.hot) {
        module.hot.accept('./reducer', () => {
            // eslint-disable-next-line
            const newReducer = require('./reducer').rootReducer; // eslint-disable-line
            store.replaceReducer(newReducer);
        });
    }
    return store;
}
