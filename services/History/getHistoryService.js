import HistoryList from '../../_mock_/HistoryList.json'
export const getHistoryList = async (db, value, callback) => {
  await db.transaction(tx => {
    tx.executeSql(`select * from transactionlist`, [], (_, { rows }) => {
    }
    )
  })
  const query = `select * from transactionlist where transactiondate LIKE '${value}%'`
  await db.transaction(tx => {
    tx.executeSql(query, [], (_, { rows }) => {
      return callback(rows._array);
    }
    )
  })
}
