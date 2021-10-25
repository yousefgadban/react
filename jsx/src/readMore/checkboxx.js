import React, {useState} from "react";

export const CheckBoxx = () => {

    let array = ["one", "two", "three", "four", "five"];
    let deleteArray = [1, 1, 1, 1, 1];

    let checkList = array.map((item, i) => { 
        return <div key={i}>
            <span >{item}</span>
            <input type='checkbox' onClick={(e) => {onInputChanged(i, e)} } /> 
        </div>
    });

    const [list, setList] = useState(checkList);
    const [delArr, setDelArr] = useState(deleteArray);

    const onDeleteClicked = () => {
        console.log('onDeleteClicked', delArr);

        let j = 0
        let deleteArr = [];
        delArr.map((item, i) => {
            if (item === 1) {
                deleteArr.push( <div key={i}>
                    <span >{array[i]}</span>
                    <input type='checkbox' onClick={(e) => {onInputChanged(i, e)} } /> 
                </div>)
            }
            j++;
        });

        setList(deleteArr);
    }

    const onResetClicked = () => {
        console.log('onResetClicked', delArr);

        deleteArray = [1,1,1,1,1];
        

        checkList = array.map((item, i) => { 
            return <div key={i}>
                <span >{item}</span>
                <input type='checkbox' defaultChecked={deleteArray[i] === 1 ? false : true} onClick={(e) => {onInputChanged(i, e)} } /> 
            </div>
        });

        console.log(delArr);
    
        setList(checkList);
        setDelArr(deleteArray);
    }


    const onInputChanged = (index, event) => {
        console.log('onInputChanged ', index, event.target.checked);
        deleteArray[index] = deleteArray[index] === 1 ? 0 : 1;
        setDelArr(deleteArray)
        console.log(delArr);

        // initialList[index].completed = !initialList[index].completed;

        // toDoList = initialList.map((item, i) => {
        //     return <div>
        //         <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.name}</span>
        //         <input type='checkbox' checked={item.completed} onChange={() => {onInputChanged(i)} } /> 
        //     </div>
        // });
        // console.log('toDoList', initialList);
        // setList(toDoList);
    } 

    return (
        <>
            <input type='button' value='delete' onClick={()=>onDeleteClicked()} />
            <input type='button' value='reset' onClick={()=>onResetClicked()} />
            <div>
                {list}
            </div>
        </>
    );
} 