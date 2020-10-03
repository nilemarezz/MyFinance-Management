export const getSubType = (value) => {
  if (value === "Transport") {
    return ["Subaru", "Motorbike Taxi", "Bus", "MRT", "BTS", "Taxi"]
  } else if (value === "Food") {
    return ["Breakfast", "Lunch", "Dinner", "Night"]
  }
  else if (value === "Dessert") {
    return ["Breakfast", "Lunch", "Dinner", "Night"]
  } else {
    return ["Lend", "K-POP", "Shopping Online"]
  }
}