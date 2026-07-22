
import { Route,Router,BrowserRouter, Routes } from 'react-router-dom'
import './index.css'
import Loginpage from './Loginpage.jsx'
import Landing from './landingpage.jsx'

function App(){
return(
     <BrowserRouter>
  <Routes>
    <Route path='/' element={<Loginpage></Loginpage>}></Route>
    <Route path='/landingpage' element={<Landing></Landing>}></Route>
  </Routes>
  </BrowserRouter>
 
)
}
export default App