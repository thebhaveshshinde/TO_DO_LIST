import { useEffect, useState } from "react"
import { useContext } from "react"
import { MyContext } from "./MyContext"
import { MyContext2 } from "./MyContext2"


function Create_task() {
  const [formisopen, setformisopen] = useState(false)
  const [Task , setTask] = useState({title:'' , description:''})
  const {Tasks , setTasks} = useContext(MyContext2)
  const {isopen , setisopen} = useContext(MyContext)

  const HandleSubmit = (e)=> {
    e.preventDefault();
   
    setTasks([...Tasks ,Task])
    setTask({title:'' , description:''})
   
  }

  const handleChange = (e)=> {
    setTask({...Task , [e.target.name]:e.target.value})
  }
  
  
  return (
    <>
      <div className="w-screen h-screen sm:absolute bg-slate-800 sm:top-20 top-10" >

        <div className="flex items-center justify-center w-screen h-screen text-center ">
          <button className={` ${isopen? 'hidden' : 'flex'} fixed z-30 p-3 text-4xl font-bold bg-red-400 border-4 text-slate-50 rounded-xl border-red-950`}            
          onClick={()=>setformisopen(!formisopen) }>Add Task !</button>



          {formisopen &&  (
           
           
          <div className={` ${isopen?'hidden':'flex'} z-40 flex flex-col items-center justify-center w-4/4 text-center bg-red-700 border-2 border-blue-700 rounded h-3/4 md:w-2/3 md:h-3/4`}>
            <form onSubmit={HandleSubmit}>
            <label className="text-3xl font-bold text-slate-50 ">Title:</label><br/>
            < input type="text" name="title" value={Task.title} onChange={handleChange} required/><br />
            <label className="text-3xl font-bold text-slate-50">Description:</label><br/>
            <textarea className="m-5" type="text" cols={30}  rows={6} name="description" value={Task.description} onChange={handleChange} required /><br /><br />
            <button className={`p-3 text-2xl font-bold bg-red-900 border-2 border-purple-500 w-60 text-slate-50 rounded-xl`} >Add</button><br/>
            
            </form><br/>
            
           
            <img onClick={()=>setformisopen(!formisopen)} className="w-10 h-12 " src="Cross.png" />
           
          </div>
          
         
        )}
        
        </div>

      </div>

      



    </>
  )
}

export default Create_task
