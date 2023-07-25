/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line camelcase
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./productReducer/reducer";
import { reducer as categoryReducer } from "./categoryReducer/reducer";
import { reducer as collectionReducer } from "./collectionReducer/reducer";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
  collectionReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
