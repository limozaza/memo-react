import React from 'react';
const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Je suis {props.name} et j'ai {props.age} ans</p>
            <p>{props.children}</p>
        </div>
    );
}
export default Person;