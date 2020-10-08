export const renderList = (list, filterType, filterList) => {
  if (list.length === 0) {
    return null
  } else {
    if (filterType === "All") {
      if (list.length === 0) {
        return null
      } else {
        return list
      }
    } else {
      if (filterList.length === 0) {
        return null
      } else {
        return filterList
      }
    }
  }
}