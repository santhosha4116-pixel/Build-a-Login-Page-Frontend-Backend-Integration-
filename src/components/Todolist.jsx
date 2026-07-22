import { useState } from "react"
import Todoitem from "./Todoitem"
function Todolist(props){
  const activity = props.activity
     const setactivity = props.setactivity
    return(
        <>
           <div className="bg-[#ffde59]  rounded-md flex-grow p-2">
               <h1 className="text-3xl font-bold mb-2 ">Today's Activity</h1>
              {
               activity.length===0?  <p>You haven't added any activity yet</p>:""}
               
               
                {
                activity.map(function(item ,index)
            {
               return <Todoitem index={index} id={item.id} item={item} activity={activity} setactivity={setactivity}></Todoitem>
            })
              }
              </div>
            
            </>
    )
}

export default Todolist