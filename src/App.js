// import Button from "./Button"

import { createContext, useEffect, useState } from "react";
import Card from "./Card";
import './App.css'

export const PassingContent = createContext()

const App = ()=>{
    const [count,setCount] = useState(0)
    
    // useEffect(()=>{
    //     console.log("Welcome");
        
        
    // },[count])
    const [dark,setDark] = useState('dark')
    const colorChange =()=>{
        setDark((curr)=>curr=="dark"?"light":"dark")
        console.log(dark);
    }

    return (
        <PassingContent.Provider value={{setCount,count}}>
            <Card />
        </PassingContent.Provider>
    )
    
    // (
        // <div className="App">
        //     {/* <Button value= "Click" />
        //     <Button  value= "Update"/>
        //     <Button value= "Edit"/>
        //     <Button value= "Login"/>
        //     <Button value= "Delete"/>
        //     <Button value= "Sumbit"/> */}
        //     {/* <button onClick={countChange}>Add{count}</button> */}
        //     <div className="box" style={{backgroundColor:dark==="dark"?"black":"red",width:"100px",height:"200px"}}></div>
        //     <button onClick={colorChange}>{dark}</button>
        // </div>
    // )
}
export default App