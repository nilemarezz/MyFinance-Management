const initialState = {
  amount: 5000
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "EDIT_AMOUNT":
      return {
        amount: action.payload.Customer
      };
    default:
      return state;
  }
}