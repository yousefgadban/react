import React, { useState } from "react";

const initialList = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
]

export const Todo = () => {

    console.log('render');
    let toDoList = initialList.map((item, i) => { 
        return <div>
            <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.name}</span>
            <input type='checkbox' checked={item.completed} onChange={() => {onInputChanged(i)} } /> 
        </div>
    });

    const [list, setList] = useState(toDoList);

    

    const onInputChanged = (index) => {
        console.log('onInputChanged ', index);
        initialList[index].completed = !initialList[index].completed;

        toDoList = initialList.map((item, i) => {
            return <div>
                <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.name}</span>
                <input type='checkbox' checked={item.completed} onChange={() => {onInputChanged(i)} } /> 
            </div>
        });
        console.log('toDoList', initialList);
        setList(toDoList);
    } 

    return(
        
        <div>
            {console.log('return')}
            {list}
        </div>
    );

}