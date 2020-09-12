import React, { Component } from 'react';
import './App.css';
import PersonFunc from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Mukti', age:Math.floor(Math.random() * 30)},
      {name:'Dwi', age:Math.floor(Math.random() * 30)},
      {name:'Jatmoko', age:Math.floor(Math.random() * 30)}
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = () => {
    //
    this.setState({
      persons: [
        {name:'Mukti Dwi Jatmoko', age:22},
        {name:'Dwi Mukti', age:21},
        {name:'Jat Mukti', age:23}
      ]
    })
  }

  render() {
   return (
    <div className="App">
      <h1>Hii, From React</h1>
      <button onClick={this.switchNameHandler}>Switch</button>
      <PersonFunc name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <PersonFunc name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Football</PersonFunc>
      <PersonFunc name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>

    );
  }
}

export default App;
