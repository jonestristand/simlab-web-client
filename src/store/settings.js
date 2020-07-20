export const SETTINGS_USE_SHORT_NAMES = "SETTINGS_USE_SHORT_NAMES";
export const SETTINGS_USE_METRIC_UNITS = "SETTINGS_USE_METRIC_UNITS";

export function setUseShortName(useShort) {
  return {
    type: SETTINGS_USE_SHORT_NAMES,
    payload: useShort
  };
}

export function setUseMetricUnits(units) {
  return {
    type: SETTINGS_USE_METRIC_UNITS,
    payload: units
  };
}

// == The initial state for this sub-reducer ==
const initialSettingsState = {
  useShortName: true,
  useMetricUnits: true
}

export function settings(state = initialSettingsState, action) {
  switch (action.type) {
    case SETTINGS_USE_SHORT_NAMES:
      return {
        ...state,
        useShortName: action.payload
      };

    case SETTINGS_USE_METRIC_UNITS:
      return {
        ...state,
        useMetricUnits: action.payload
      };

    default: 
      return state;
  };
}