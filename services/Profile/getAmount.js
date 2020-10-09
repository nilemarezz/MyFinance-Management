export const getAmountList = async (db, callback) => {


  await db.transaction(tx => {
    tx.executeSql(`select * from users`, [], (_, { rows }) => {
      console.log(rows._array)
    }
    )
  })
  await db.transaction(tx => {
    tx.executeSql(`select amount from users`, [], (_, { rows }) => {
      console.log('...', rows._array)
      callback(rows._array[1].amount)
    }
    )
  })

}
