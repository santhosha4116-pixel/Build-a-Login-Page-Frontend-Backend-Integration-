function Todoitem(props){
     const activity = props.activity
     const setactivity = props.setactivity

function handledelete(removeid){
      console.log(removeid)
      var tvalue = activity.filter(function(item){
            if(item.id === removeid){
                  return false
            }
            else{
                  return true
            }
            
       })
       setactivity(tvalue)
}
     
      return (<>
      <div className="flex justify-between">
      <p>{props.index+1}.{props.item.activity}</p> 
      <button className="text-red-700 border-2 mt-1 rounded-md p-1 hover:bg-red-700 hover:text-white" onClick={()=>{handledelete(props.id)}}>Delete</button>
      </div>
      </>)
    
}
export default Todoitem