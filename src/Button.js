import { useContext } from "react"
import { PassingContent } from "./App"

const Button = ({value})=>{
    const {setCount} = useContext(PassingContent)
    const handleChange = ()=>{
        setCount((curr)=>curr+1)        
    }
    return (
        <div className="button">
            <button onClick={handleChange} >{value}</button>
        </div>
    )
}
export default Button