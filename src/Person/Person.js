import React from 'react';
import classes from './Person.css'
const Person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Je suis {props.name} et j'ai {props.age} ans</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    );
}
export default Person;