import GetListByDate from '../../_mock_/GetListByDate.json'

export const getListByDate = async (db, value, callback) => {
  await db.transaction(tx => {
    tx.executeSql(`select * from transactionlist`, [], (_, { rows }) => {
      console.log(rows)
    }
    )
  })
  const query = `select * from transactionlist where transactiondate LIKE '${value}%'`
  await db.transaction(tx => {
    tx.executeSql(query, [], (_, { rows }) => {
      console.log('...', rows._array)
      return callback(rows._array);
    }
    )
  })
}
