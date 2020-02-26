import _ from 'underscore';

export const ADD_TEST = "ADD_TEST";
export const REMOVE_TEST = "REMOVE_TEST";
export const TOGGLE_TEST = "TOGGLE_TEST";

export function addTest(test) {
  return {
    type: ADD_TEST,
    payload: test
  };
}

export function removeTest(test) {
  return {
    type: REMOVE_TEST,
    payload: test
  };
}

export function toggleTest(test) {
  return {
    type: TOGGLE_TEST,
    payload: test
  };
}

// == The initial state for this sub-reducer ==
const initialTestsState = [
  'basic'
];

export function tests(state = initialTestsState, action) {
  switch (action.type) {
    case ADD_TEST:
      if (!_.contains(state, action.payload)) {
        // Disease not already in list
        return [ 
          ...state,
          action.payload
        ];
      } else return state;

    case REMOVE_TEST:
      if (_.contains(state, action.payload)) {
        // Disease is in list, remove it
        return _.filter(state, (value) => value !== action.payload);
      } else return state;

      case TOGGLE_TEST:
        if (_.contains(state, action.payload)) {
          // Disease is in list, remove it
          return _.filter(state, (value) => value !== action.payload);
        } else {
          // Disease is not in list, add it
          return [ 
            ...state,
            action.payload
          ];
        }

    default: 
      return state;
  };
}