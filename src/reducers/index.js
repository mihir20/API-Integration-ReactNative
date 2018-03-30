import { combineReducers } from 'redux'
import peopleReducer from './peopleReducer'

const rootReduce = combineReducers({
    peopleReducer,
})

export default rootReduce;