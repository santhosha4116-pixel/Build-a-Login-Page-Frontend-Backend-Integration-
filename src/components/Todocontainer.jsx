import { Link } from "react-router-dom"
import Addtodofrom from "./Addtodofrom"
import Todolist from "./Todolist"
import { useState } from "react"

function Todolistcontainer() {

      const [activity,setactivity] = useState([
        
        {
            id:1,
            activity:"walk at 7pm"
        },
        {
            id:2,
            activity:"Drink water"
        },
        {
            id:3,
            activity:"coffee"
        },
    ])
    return (

        <div> 
            <div className=" flex justify-between gap-6 align-center flex-wrap">
           <Addtodofrom activity={activity} setactivity={setactivity}></Addtodofrom>
            <Todolist activity={activity} setactivity={setactivity} ></Todolist>
            </div>
           <Link to='/' className="text-white bg-black border-2 mt-1 rounded-md p-1"> 🢀 Back</Link>
        </div>
    )
}
export default Todolistcontainer