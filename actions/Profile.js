export const MINUS_MONTHLY_AMOUNT = "MINUS_MONTHLY_AMOUNT"
export const ADD_MONTHLY_AMOUNT = "ADD_AMOUNT"

export const minusMonthlyAmount = (value) => {
  return { type: MINUS_MONTHLY_AMOUNT, payload: value }
}

export const addMonthlyAmount = (value) => {
  return { type: ADD_MONTHLY_AMOUNT, payload: value }
}