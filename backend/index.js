const express =require("express")
const app =express()
 const cors = require("cors")
var uemail="santhosh1234@gmail.com"
var upassword="santhosh2006"

app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.post("/login",function(request,reponse){

console.log(request.body.Email)

if(uemail === request.body.Email && upassword === request.body.password){
    reponse.send(true)
}else{
    reponse.send(false)
}
})

app.listen(5000,function(){
    console.log("server working...")
})