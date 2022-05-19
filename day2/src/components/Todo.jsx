import React from "react";



let Todo =()=>
{
    const [value,setValue]=React.useState("");
    const [todos,setTodos]=React.useState([]);
    
    return (
    <>
        <input value={value} onChange={(e)=>
        {
            setValue(e.target.value);
        }} />

        <button onClick={()=>
        {
            setTodos([...todos,{value:value}]);
            setValue("");
        }}>Add</button>
        {
        todos.map((todo)=>
        ( <div>{todo.value}</div>)
        )
        }
    </>
    )
    
}

export {Todo} ;