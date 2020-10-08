import { GET_LIST, SET_FILTER, ADD_LIST, SET_FILTER_RECENT, DELETE_LIST, SET_DATE, SET_DATE_LIST } from '../actions/History'
import { formatDate } from '../utilities/formatDate'
const initialState = {
  list: [],
  filterType: "All",
  filterList: [],
  filterTypeRecent: "All",
  filterRecentList: [],
  selectedDate: formatDate(new Date()),
  selectedDateList: [],
  filterSelectedDateList: []
};

const filterByType = (list, filterType) => {
  let oldList = [...list]
  const newList = oldList.filter((item) => item.type === filterType)
  return newList
}

const filterById = (list, id) => {
  let oldList = [...list]
  const newList = oldList.filter((item) => item.id !== id)
  return newList
}
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state, list: action.payload
      };
    case ADD_LIST:
      let newlist = [...state.list]
      newlist.push(action.payload)
      return {
        ...state, list: newlist
      };
    case SET_FILTER:
      return {
        ...state, filterType: action.payload, filterList: filterByType(state.list, action.payload),
        filterSelectedDateList: filterByType(state.selectedDateList, action.payload)
      }
    case SET_FILTER_RECENT:
      return { ...state, filterTypeRecent: action.payload, filterRecentList: filterByType(state.list, action.payload) }
    case DELETE_LIST:
      return { ...state, list: filterById(state.list, action.payload) }
    case SET_DATE:
      return { ...state, selectedDate: action.payload }
    case SET_DATE_LIST:
      return { ...state, selectedDateList: action.payload }
    default:
      return state;
  }
}