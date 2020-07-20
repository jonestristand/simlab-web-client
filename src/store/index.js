import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import localForage from 'localforage';

import { patient } from './patient';
import { disease } from './disease';
import { tests } from './tests';
import { settings } from './settings';
import { reportResult } from './reportResult';

function mainReducer (state = {}, action) {
  return {
    patient: patient(state.patient, action),
    disease: disease(state.disease, action),
    tests: tests(state.tests, action),
    reportResult: reportResult(state.reportResult, action),
    settings: settings(state.settings, action)
  };
}

const persistConfig = {
  key: 'root',
  storage: localForage,
  timeout: 1000
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

// Only include devtools hook when in debug
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store);

export {
  store,
  persistor
};