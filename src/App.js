import React, { Component } from 'react';
import './App.css';
import PersonFunc from './Person/Person';

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



  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name:'Mukti', age:22},
        {name:'Dwi Mukti', age:21},
        {name:event.target.value, age:23}
      ]
    })
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

    const styleButton = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid black',
      padding: '8px',
      cursor: 'pointer',
      width: '110px'
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return (
            <PersonFunc
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}

            />
          )
        })}

      </div>

      )
    }


   return (
    <div className="App">
      <h1>Hii, From React</h1>
      <button
      style={styleButton}
      onClick={this.toggleNameHandler}>Switch</button>
      {persons}

    </div>

    );
  }
}

export default App;
