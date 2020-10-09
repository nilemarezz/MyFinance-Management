export const GET_LIST = "GET_LIST"
export const GET_DATE_LIST = "GET_DATE_LIST"
export const SET_FILTER = "SET_FILTER"
export const ADD_LIST = "ADD_LIST"
export const SET_FILTER_RECENT = "SET_FILTER_RECENT"
export const DELETE_LIST = "DELETE_LIST"
export const SET_DATE_LIST = "SET_DATE_LIST"
export const SET_DATE = "SET_DATE"

export const getList = (value) => {
  return { type: GET_LIST, payload: value }
}

export const setFilter = (value) => {
  return { type: SET_FILTER, payload: value }
}

export const addList = (value) => {
  console.log(value)
  return { type: ADD_LIST, payload: value }
}

export const setFilterRecent = (value) => {
  return { type: SET_FILTER_RECENT, payload: value }
}

export const deletedList = (value) => {
  return { type: DELETE_LIST, payload: value }
}

export const setDate = (value) => {
  return { type: SET_DATE, payload: value }
}
export const setListDate = (value) => {
  return { type: SET_DATE_LIST, payload: value }
}

