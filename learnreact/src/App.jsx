import React, { useState } from "react";


const App = () =>{
    // const state=useState();
// console.log(state);
const inputEvent = (event) =>{
    // console.log(event.target.value);
    setName(event.target.value);
}
let TIMe=new Date().toLocaleTimeString();
const [count,setCount]=useState(0);
const [time,setTime]=useState(TIMe);
const [name,setName]=useState("");
const [fullName,setFullName]=useState()
const IncNum = () =>{
   setCount(count+1);
    console.log('clicked');
}
    const currTime = () =>{
        TIMe=new Date().toLocaleTimeString();
        setTime(TIMe);
    }
    const onSubmit = () =>{
        setFullName(name);
    }



    return(
        <>
        <h1> {count} </h1>
        <button onClick={IncNum}> PRESS </button>
        <h1>{time}</h1>
        <button onClick={currTime}>GET TIME</button>
        <h1>Hello {fullName}</h1>
        <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name}/>
        <button onClick={onSubmit}>Click Me</button>
        </>
    );
};
export default App;