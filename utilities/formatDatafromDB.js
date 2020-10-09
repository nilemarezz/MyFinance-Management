export const formatData = (value) => {
  let data = []
  value.map(item => {
    data.push({
      id: item.id, type: item.type,
      subType: item.subtype, amount: item.amount, date: item.transactiondate.substring(0, 9), time: item.transactiondate.substring(10, 15)
    })

  })
  return data
}
