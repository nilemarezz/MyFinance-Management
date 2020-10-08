export const getSubType = (value) => {
  if (value === "Transport") {
    return ["Select Subtitle", "Subaru", "Motorbike Taxi", "Bus", "MRT", "BTS", "Taxi"]
  } else if (value === "Food") {
    return ["Select Subtitle", "Breakfast", "Lunch", "Dinner", "Night"]
  }
  else if (value === "Dessert") {
    return ["Select Subtitle", "Breakfast", "Lunch", "Dinner", "Night"]
  } else {
    return ["Select Subtitle", "Lend", "K-POP", "Shopping Online"]
  }
}