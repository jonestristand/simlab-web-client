import _ from 'underscore';

export const ADD_DISEASE = "ADD_DISEASE";
export const REMOVE_DISEASE = "REMOVE_DISEASE";
export const TOGGLE_DISEASE = "TOGGLE_DISEASE";

export function addDisease(disease) {
  return {
    type: ADD_DISEASE,
    payload: disease
  };
}

export function removeDisease(disease) {
  return {
    type: REMOVE_DISEASE,
    payload: disease
  };
}

export function toggleDisease(disease) {
  return {
    type: TOGGLE_DISEASE,
    payload: disease
  };
}

// == The initial state for this sub-reducer ==
const initialDiseaseState = [
];

export function disease(state = initialDiseaseState, action) {
  switch (action.type) {
    case ADD_DISEASE:
      if (!_.contains(state, action.payload)) {
        // Disease not already in list
        return [ 
          ...state,
          action.payload
        ];
      } else return state;

    case REMOVE_DISEASE:
      if (_.contains(state, action.payload)) {
        // Disease is in list, remove it
        return _.filter(state, (value) => value !== action.payload);
      } else return state;

      case TOGGLE_DISEASE:
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