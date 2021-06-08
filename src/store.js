import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { weatherReducer, unitReducer } from './reducers'

const rootReducer = combineReducers({
  weather: weatherReducer,
  unit: unitReducer,
})

const initialState = {
  weather: {},
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
