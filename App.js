import * as React from 'react';
import Routes from './routes/index'
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Rootreducer from './reducers/index'
import * as SQLite from 'expo-sqlite';

export default function App() {
  const db = SQLite.openDatabase("db.db");
  const store = createStore(Rootreducer, applyMiddleware(thunk))
  React.useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        `create table if not exists transactionlist (id integer PRIMARY KEY AUTOINCREMENT , type varchar(30) , 
        subtype varchar(30) , description varchar(100) , 
        transactiondate date , amount integer) ;`
      );
    });
    db.transaction(tx => {
      tx.executeSql(
        `create table if not exists users (id integer PRIMARY KEY AUTOINCREMENT , userName varchar(50) , amount integer) ;`
      );
    });
    // db.transaction(tx => {
    //   tx.executeSql(
    //     `delete from users`
    //   );
    // });

    db.transaction(tx => {
      tx.executeSql(`insert into users (userName,amount) values ("Matas",3000)`, [], (_, { rows }) => {
        console.log(rows.length)
      }
      )
    })
  }, [])
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}