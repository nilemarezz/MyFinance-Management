export const GET_LIST = "GET_LIST"
export const SET_FILTER = "SET_FILTER"

export const getList = (value) => {
  return { type: GET_LIST, payload: value }
}

export const setFilter = (value) => {
  return { type: SET_FILTER, payload: value }
}

