import { combineReducers } from 'redux';
import ProfileReducer from './Profile'
import HistoryReducer from './History'

export default combineReducers({
  profile: ProfileReducer,
  history: HistoryReducer
})