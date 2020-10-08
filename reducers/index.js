import { combineReducers } from 'redux';
import ProfileReducer from './Profile'
import HistoryReducer from './History'
import AnalyzeReducer from './Analyze'
export default combineReducers({
  profile: ProfileReducer,
  history: HistoryReducer,
  analyze: AnalyzeReducer
})