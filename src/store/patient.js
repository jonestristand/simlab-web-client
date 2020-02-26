export const SET_PATIENT_AGE = "SET_PATIENT_AGE";
export const SET_PATIENT_HEIGHT = "SET_PATIENT_HEIGHT";
export const SET_PATIENT_WEIGHT = "SET_PATIENT_WEIGHT";
export const SET_PATIENT_GENDER = "SET_PATIENT_GENDER";

export function setPatientAge(age) {
  return {
    type: SET_PATIENT_AGE,
    payload: age
  };
}

export function setPatientHeight(height) {
  return {
    type: SET_PATIENT_HEIGHT,
    payload: height
  };
}

export function setPatientWeight(weight) {
  return {
    type: SET_PATIENT_WEIGHT,
    payload: weight
  };
}

export function setPatientGender(gender) {
  return {
    type: SET_PATIENT_GENDER,
    payload: gender
  };
}

// == The initial state for this sub-reducer ==
const initialPatientState = {
  age: 20,
  height: 150,
  weight: 70,
  gender: 'f'
}

export function patient(state = initialPatientState, action) {
  switch (action.type) {
    case SET_PATIENT_AGE:
      return {
        ...state,
        age: action.payload
      };

    case SET_PATIENT_HEIGHT:
      return {
        ...state,
        height: action.payload
      };

    case SET_PATIENT_WEIGHT:
      return {
        ...state,
        weight: action.payload
      };

    case SET_PATIENT_GENDER:
      return {
        ...state,
        gender: action.payload
      };

    default: 
      return state;
  };
}