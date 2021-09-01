import { combineReducers } from 'redux'
import commentReducer from './comments/reducers'
import subscriberReducer from './Subscribers/reducers'
import viewReducer from './Views/reducers'

const rootReducer = combineReducers({
  views: viewReducer,
  comments: commentReducer,
  subscribe: subscriberReducer,
})

export default rootReducer
