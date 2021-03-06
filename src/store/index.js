import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { name } from 'pckg';
import * as reducers from 'reducers';

const compose = composeWithDevTools({ name });

const store = createStore(
  persistReducer(
    { whitelist: ['settings'], key: name, storage },
    combineReducers(reducers)
  ),
  compose()
);

export const persistor = persistStore(store);

export default store;
