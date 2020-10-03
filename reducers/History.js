import { GET_LIST, SET_FILTER } from '../actions/History'

const initialState = {
  todayList: [],
  filterType: "All",
  filterTodayList: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state, todayList: action.payload
      };
    case SET_FILTER:
      let oldList = [...state.todayList]
      const newList = oldList.filter((item) => item.type === action.payload)
      // console.log(newList)
      return {
        ...state, filterType: action.payload, filterTodayList: newList
      }
    default:
      return state;
  }
}