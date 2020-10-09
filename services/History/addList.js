import { formatDate } from '../../utilities/formatDate'
import { formatTime } from '../../utilities/formatTime'
export const AddListService = async (db, value, callback) => {
  const query = `insert into transactionlist (type , subtype , transactiondate , amount , description) 
  values ("${value.type}" , "${value.subType}" , "${value.date} ${value.time}" , ${value.amount} , "${value.description}")`
  await db.transaction(tx => {
    tx.executeSql(query, [], (_, { rows }) => {
      console.log(rows.length)
    }
    )
  })
}
