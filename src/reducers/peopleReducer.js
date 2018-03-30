import * as types from '../actions/types'

const INITIAL_STATE = {
    people : [],
    isFetching:false,
    error:false,
}

export default peopleReducer = (state=INITIAL_STATE,action) =>{

    switch (action.type){
        case types.FETCHING_PEOPLE:
           return{
               ...state,
               isFetching:true,
               people: [],
           }
        case types.FETCHING_PEOPLE_SUCCESS:
           return{
            ...state,
            isFetching:false,
            people: action.data,
        }
        case types.FETCHING_PEOPLE_FAIL:
           return{
               ...state,
               isFetching:false,
               error:true,
           }
        default:
         return state
    }
    
}