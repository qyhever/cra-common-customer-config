import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { history } from '@/utils/history'
import useReducer from './user'

const rootReducer = combineReducers({
  router: connectRouter(history), // root reducer with router state
  user: useReducer
})
export default rootReducer
