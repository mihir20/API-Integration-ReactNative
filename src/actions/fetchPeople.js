import * as types from './types'

export const fetchPeopleFromApi = () =>{
   return (dispatch) => {
       dispatch(getPeople())
       fetch('https://swapi.co/api/people/').then(
           res => res.json()
       ).then(
         json => dispatch(getPeopleSuccess(json.results))
       ).catch(
           err => dispatch(getPeopleFail(err))
       )
   }
}

export const getPeople = () => {
    return {
        type:types.FETCHING_PEOPLE
    }
}

export const getPeopleSuccess = (data) => {
    return{
        type:types.FETCHING_PEOPLE_SUCCESS,
        data,
    }
}

export const getPeopleFail = () => {
    return{
        type:types.FETCHING_PEOPLE_FAIL,
    }
}