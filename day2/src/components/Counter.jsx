import React from "react";

let Counter=({intialValue})=>
{
    const [count,setCount]=React.useState(intialValue);
    return <div className="box">
        <h3>Counter</h3>
        <h1 className={count%2!==0?"red":"green"}>{count}</h1>
        <div className="gap">
            <button className="button" onClick={()=>setCount(count+1)}>Increment</button>
            <button className="button" onClick={()=>setCount(count-1)}>Decrment</button>
        </div>
        <br />
        <button className="button" onClick={()=>setCount(count*2)}>Double</button>
    </div>
}

export {Counter} ;