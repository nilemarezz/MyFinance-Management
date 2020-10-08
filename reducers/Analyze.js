import { SET_ANALYZE_DATE } from '../actions/Analyze'
const initialState = {
  amountUsePerType: [],
  amountUsePerDay: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ANALYZE_DATE:
      return { amountUsePerType: action.payload.amountUsePerType, amountUsePerDay: action.payload.amountUsePerDay }
    default:
      return state;
  }
}