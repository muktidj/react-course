import React from 'react'
import classes from './Cockpit.module.css'

const cockpit = (props) => {

  const assignedClasses = [];
  let btnClass ='';
  if (props.showPersons) {
    btnClass = classes.red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

return (
    <div className={classes.Cockpit}>
      <h1>Hii, From React</h1>
        <p className={assignedClasses.join(' ')}>React is awesome, thanks facebook</p>

      <button className={btnClass} onClick={props.clicked}>
      Switch
      </button>
    </div>
)
}

export default cockpit