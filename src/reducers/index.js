import { combineReducers } from 'redux'
import peopleReducer from './peopleReducer'

const rootReduce = combineReducers({
    people: peopleReducer,
})

export default rootReduce