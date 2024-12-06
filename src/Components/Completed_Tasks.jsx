import { useContext } from "react"
import { MyContext4 } from "./MyContext4"
import { Link } from "react-router-dom"

function Completed_Tasks() {
  const {Completed , setCompleted} = useContext(MyContext4)
  return (
    <>
      <div className="min-h-screen bg-slate-800">
        <div className="top-0 left-0 right-0 h-20"></div>
        <div  className="flex flex-col w-screen min-h-screen text-center bg-slate-800 md:grid md:grid-cols- lg:grid-cols-4 ">
         {Completed.length>0 ? (
          <div className="w-screen min-h-screen bg-slate-800 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
             {Completed.map((m , index)=>(
              <div className="flex flex-col items-center justify-center p-3 m-4 text-center border-2 border-purple-800 rounded w-4/4 sm:w-3/4 md:w-50vw lg:w-40vw bg-slate-700 h-3/4" key={index}>
              <h1 className="text-xl font-bold text-slate-50 lg:text-lg"><strong  className="font-light">Title:</strong>{m.title}</h1>
              <p className="text-xl font-bold text-slate-50 lg:text-sm"><strong className="font-light">Description:</strong>{m.description}</p>
              </div>
             ))}
          </div>
         ) : (
          <div  className="flex flex-col items-center justify-center w-screen h-screen text-center">
            <p className="text-2xl italic font-bold text-slate-50">No Tasks Yet Completed ... </p><br/>
            <Link to="/" className="text-xl text-blue-600">Click to Add Task</Link>
          
          </div>
         )}
      </div>
      </div>
    </>
  )
}

export default Completed_Tasks
