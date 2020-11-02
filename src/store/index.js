import {createStore,applyMiddleware} from 'redux';
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers';
import history from '../utils/history';
let store = applyMiddleware(routerMiddleware(history),thunk)(createStore)(rootReducer);
export default store;