import React from 'react';
import {
  Button,
  View
} from 'react-native';
import {connect} from 'react-redux';
import { fetchPeopleFromApi } from './actions/fetchPeople';


const App = (props) =>{
  console.log("people: ",props.people)
  return (
    <View>
      <Button onPress={()=> props.getPeople()} title='press' />
    </View>
  )
}

const mapStateToProps = (state) => {
  return{
    people : state.people,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getPeople : () => dispatch(fetchPeopleFromApi()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);