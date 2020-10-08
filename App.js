import * as React from 'react';
import Routes from './routes/index'
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Rootreducer from './reducers/index'
export default function App() {
  const store = createStore(Rootreducer, applyMiddleware(thunk))
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}