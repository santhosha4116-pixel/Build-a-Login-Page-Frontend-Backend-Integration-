function Card(props){
    return(
          <div  style={{backgroundColor:props.bgcolor}}className=' py-3 px-6  rounded-md  grow  text-center '>
            <h1 className= 'text-3xl font-bold'>{props.title}</h1>
            <p className='font-normal text-2xl'>{props.descr}</p>
          </div>
    )
}
export default Card