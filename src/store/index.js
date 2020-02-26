import { createStore } from 'redux';

import { patient } from './patient';
import { disease } from './disease';
import { tests } from './tests';
import { reportResult } from './reportResult';

function mainReducer (state = {}, action) {
  return {
    patient: patient(state.patient, action),
    disease: disease(state.disease, action),
    tests: tests(state.tests, action),
    reportResult: reportResult(state.reportResult, action)
  };
}

// Only include devtools hook when in debug
const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;