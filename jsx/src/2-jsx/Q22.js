import React from 'react';

const data = ["hello", "world"];
const number1 = 5;
const number2 =6;
const string = 'I love React!';


const Q22 = () => {
    return (
        <div>
            <p>{data.join(' ')}</p>
            <p>{`5 + 6 = ${number1 + number2}`}</p>
            <p>{`The string’s length is ${string.length}`}</p>
        </div>
    );
}

export default Q22;