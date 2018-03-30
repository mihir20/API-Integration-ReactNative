import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text
} from 'react-native';
import {connect} from 'react-redux';
import { fetchPeopleFromApi } from './actions/fetchPeople';


const App = (props) =>{
  const { people, isFetching } = props.people;
  console.log("people: ",props.people);
  return (
    <View style={styles.buttonStyle}>
      <Button onPress={()=> props.getPeople()} title='press'/>

      {
        isFetching && <Text>Loading</Text>
      }
      {
        people.length ? (
          people.map((person, i) => {
            return <View key={i} >
              <Text>Name: {person.name}</Text>
              <Text>Birth Year: {person.birth_year}</Text>
            </View>
          })
        ) : null
}

    </View>
  )
}

styles = StyleSheet.create({
  buttonStyle : {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

const mapStateToProps = (state) => {
  return{
    people : state.peopleReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getPeople : () => dispatch(fetchPeopleFromApi()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);