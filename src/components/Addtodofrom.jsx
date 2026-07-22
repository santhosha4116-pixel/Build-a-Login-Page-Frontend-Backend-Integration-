import { useState } from "react"

function Addtodofrom(props){
     const activity = props.activity
     const setactivity = props.setactivity
     const [newactivity,setnewactivity]=useState("")
     function handlechange(event){
        setnewactivity(event.target.value)
     }
function handleadd(){
    setactivity([...activity,{id:activity.length+1 , activity:newactivity}])
    setnewactivity("")
}
return(
     <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">Manage Activities</h1>
                <div>
                    <input value={newactivity} onChange={handlechange} placeholder="Next Activity" type="text" className=" px-1 py-0.5 border-black  border-[1px]"></input><button onClick={handleadd} className="bg-black border-[1px] border-black text-white font-medium px-1 py-0.5">Add</button>
                </div>

            </div>
)
}
export default Addtodofrom