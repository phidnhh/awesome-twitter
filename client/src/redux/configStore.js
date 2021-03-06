import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/index';
import AppReducer from "./reducers/AppReducer";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  AppReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
