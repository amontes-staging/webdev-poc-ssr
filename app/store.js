import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import { rootReducer, rootSaga } from './reducers';

export const initializeStore = (initialState) => {
  // saga setup
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  
  return store;
}
