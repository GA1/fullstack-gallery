import {createStore, combineReducers, applyMiddleware} from "redux";
import { logger } from 'redux-logger'

import galleryReducer from "./reducers/galleryReducer";

var middleware = []
if (process.env.NODE_ENV !== 'production')
  middleware.push(logger)

export default createStore(
    combineReducers({
      galleryReducer: galleryReducer,
    }),
    {},
    applyMiddleware(...middleware)
);