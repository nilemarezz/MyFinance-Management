export const MinusMonthlyAmount = async (value, db) => {
  console.log('...', value)
  db.transaction(tx => {
    tx.executeSql(`select amount from users where id = 1`, [], (_, { rows }) => {
      let amount = rows._array[0].amount + value
      console.log('....', rows._array[0].amount, value)
      db.transaction(tx => {
        tx.executeSql(`UPDATE users SET amount = ${amount}`, [], (_, { rows }) => {
          console.log(rows.length)
        }
        )
      })
    }
    )
  })
}