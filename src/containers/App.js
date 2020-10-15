import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Persons/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      {id:'key1', name:'Mukti', age:Math.floor(Math.random() * 30)},
      {id:'key2', name:'Dwi', age:Math.floor(Math.random() * 30)},
      {id:'key3', name:'Jatmoko', age:Math.floor(Math.random() * 30)}
    ],
    otherState: 'Some other value',
    showPersons: false
  }



  switchNameHandler = (newName) => {
    //
    this.setState({
      persons: [
        {name:newName, age:22},
        {name:'Dwi Mukti', age:21},
        {name:'Jat Mukti', age:23}
      ]
    })
  }



  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(perIndex => {
      return perIndex.id === id
    })


    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons : persons })
  }

  deletePersonHandler = (personIndex) => {
    // Untuk mengupdate sebuah state kita harus membuat
    // Salinan dahulu dari object asli, ini cara yang dianjurkan.
    // Bisa menggunakan Slice atau spread
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  toggleNameHandler = () => {
    const doesShowPerson = this.state.showPersons
    this.setState({ showPersons: !doesShowPerson})
  }



  render() {



    let persons = null

    if (this.state.showPersons) {
      persons = (
      <div>
        <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
        />
      </div>

      )

    }




   return (


    <div className="App">
      <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.toggleNameHandler}
      />
      {persons}
    </div>



    )
  }
}

export default App
