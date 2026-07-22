import { useState } from "react"
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
function Loginpage(){
    const [email,setemail]= useState([""])
    const [password,setpassword] =useState()
    const gmailvaild =/^[a-z0-9](\.?[a-z0-9])*@gmail\.com$/
   const [vaild,setvalid] =useState(true)
   const [pvaild,setpvalid] =useState(true)
   const[headvaild,setheadvaild] = useState(true)
   const navigate = useNavigate()
function addemail(event){
 var value =(event.target.value)
  setemail(value)
if(gmailvaild.test(value)){
    setvalid(true)
}else{
    setvalid(false)
    setpvalid(true)
}


}
function addpassword(event){
 var pvalue=(event.target.value)
setpassword(pvalue)

}
function submit(){
var logindetail = axios.post("http://localhost:5000/login",{"Email":email, "password":password})
logindetail.then(function(data){
      if(data.data=== true){
        navigate("/landingpage")
      }else{
        navigate("/")
         setheadvaild(false)
         setemail("")
         setpassword("")
      }
    })
  

    if(password.length <8 && email.length <10){
    setpvalid(false)
    setvalid(true)
}else{
    setpvalid(true)

}

}
    return(
       <div className="flex flex-col items-center font-montserrat text-[#191919]">
        <div className=" flex flex-col text-center items-center bg-[#ffde59] w-[35%] gap-4 rounded-2xl my-60 p-3    
            xl:w-[35%]
            md:w-[50%] max-md:w-[50%]
             sm:w-[90%] max-sm:w-[90%] ">
            <h1 className="text-3xl font-extrabold">Login</h1>
           { headvaild?<p className="font-medium m-0 p-0">Please enter your email and password</p>:
            <p className="font-medium m-0 p-0 text-red-600 ">Please enter correct email id and password</p>
            
            
           }
          
            <p className="text-[20px] font-semibold">Email:</p>
            <input value={email} placeholder="Enter Gmail" className="w-[50%] px-1 py-1 border-2 rounded-2xl font-medium hover:bg-white"
            onChange={addemail}
            ></input>
           <span className="text-red-600 font-medium text-[15px]" >
                {
                vaild?"":"Enter a valid Gmail address"
                }
                   {
                    pvaild?"":" Please Enter Gmail"
            }
            </span>
            <p className="text-[20px] font-semibold">Password:</p>
            <input value={password} placeholder="Enter Password" className="w-[50%] border-2 px-1 py-1 rounded-2xl font-medium hover:bg-white"
            onChange={addpassword}
            ></input>
            <span className="text-red-600 font-medium text-[15px]">
                {
                    pvaild?"":" Please Enter Password"
            }
            
            </span>
            <button className="bg-white py-2 px-4  rounded-md font-bold hover:scale-110 transition-transform duration-500  " 
            onClick={submit}>Login</button>
        </div>
       </div>
    )
}
export default Loginpage