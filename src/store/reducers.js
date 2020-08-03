import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { history } from '@/utils/history'

const rootReducer = combineReducers({
  router: connectRouter(history) // root reducer with router state
})
export default rootReducer
