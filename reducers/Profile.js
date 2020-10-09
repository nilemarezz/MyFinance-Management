import { MINUS_MONTHLY_AMOUNT, ADD_MONTHLY_AMOUNT } from '../actions/Profile'
const initialState = {
  amount: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "EDIT_AMOUNT":
      return {
        amount: action.payload.Customer
      };
    case "SET_MONTHLY_AMOUNT":
      return { amount: action.payload }
    case MINUS_MONTHLY_AMOUNT:
      let minusOldAmount = state.amount
      return { ...state, amount: minusOldAmount + action.payload }
    case ADD_MONTHLY_AMOUNT:
      let addOldAmount = state.amount - action.payload
      return { ...state, amount: addOldAmount }
    default:
      return state;
  }
}