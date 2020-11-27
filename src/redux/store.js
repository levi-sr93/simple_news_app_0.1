import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import newsReducer from './reducers/newsReducers';

const rootReducer = combineReducers({
  news: newsReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);