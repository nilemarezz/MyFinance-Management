export const getIconType = (type) => {
  if (type === "Transport") {
    return "ios-car"
  } else if (type === "Food") {
    return "ios-pizza"
  }
  else if (type === "Dessert") {
    return "ios-ice-cream"
  }
  else if (type === "Other") {
    return "ios-cash"
  }
  else if (type === "All") {
    return "ios-list"
  }
}