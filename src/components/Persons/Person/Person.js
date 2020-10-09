import React from 'react';
// import Radium from 'radium';
//import styled from 'styled-components'

import classes from './Person.module.css';
// const StyledDiv = styled.div`

//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px){
//         width: 450px;

//     &:hover {
//         background-color: lightgreen;
//         color: white;
//         font-weight: bold;
//     }
//     }
// `;

const person = (props) => {
    // const stylePerson = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return (
    // <StyledDiv>
    <div className={classes.Person}>

        <p onClick={props.click}>Hello, My name is {props.name}. I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>

    </div>
    // </StyledDiv>
    )
}


export default person;