export const SET_REPORT_RESULT = "SET_REPORT_RESULT";

export function setReportResult(reportResult) {
  return {
    type: SET_REPORT_RESULT,
    payload: reportResult
  };
}

// == The initial state for this sub-reducer ==
const initialReportResultState = {
};

export function reportResult(state = initialReportResultState, action) {
  switch (action.type) {
    case SET_REPORT_RESULT:
      return action.payload;

    default: 
      return state;
  };
}