import { useState } from 'react'
import Header from './components/Header'
import Card from './components/card'
import Todolistcontainer from './components/Todocontainer'
import { useLocation } from "react-router-dom"
function Landing() {
    const data = useLocation()
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#191919] p-16'>
        <div className='bg-white p-12 border rounded-md flex flex-col gap-4'>
          <Header ></Header>
          <div className='flex justify-between gap-2 flex-wrap'>
            <Card bgcolor={"#ffde59"} title={"23°"} descr={"Chennai"} ></Card>
            <Card bgcolor={"#ffde59"} title={"July 07"} descr={"06:29 PM"}></Card>
            <Card bgcolor={"#ffde59"} title={"Using"} descr={"React"}></Card>
          </div>
            <Todolistcontainer></Todolistcontainer>    
      </div>
      </div>
    </>
  )
}

export default Landing