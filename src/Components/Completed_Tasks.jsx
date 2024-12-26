import { useContext } from "react"
import { MyContext4 } from "./MyContext4"
import { MyContext } from "./MyContext"
import { Link } from "react-router-dom"
import { MyContext5 } from "./MyContext5"

function Completed_Tasks() {
  const {isopen} = useContext(MyContext)
  const {Completed , setCompleted} = useContext(MyContext4)
  const {light} = useContext(MyContext5)

  const HandleCompleteClick = ()=>{
    localStorage.removeItem('completes')
    setCompleted([])
  }

  return (
    <>
      <div className={`${light?'bg-cyan-200':'bg-slate-800'} min-h-screen `}>
        <div className="top-0 left-0 right-0 h-20">
        <img src="../Trash.png" onClick={HandleCompleteClick} className={`${isopen?'hidden' : 'flex'} fixed text-4xl text-purple-400 bolder bottom-3 right-3 `} />
        </div>
        <div  className={`${light?'bg-cyan-200':'bg-slate-800'} flex flex-col w-screen min-h-screen text-center  md:grid md:grid-cols- lg:grid-cols-4`}>
         {Completed.length>0 ? (
          <div className={`${light?'bg-cyan-200':'bg-slate-800'} w-screen min-h-screen  md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
             {Completed.map((m , index)=>(
              <div className={`${light?'bg-slate-400':'bg-slate-700'} flex flex-col items-center justify-center p-3 m-4 text-center border-2 border-purple-800 rounded w-4/4 sm:w-3/4 md:w-50vw lg:w-40vw  h-3/4`} key={index}>
              <h1 className="text-xl font-bold text-slate-50 lg:text-lg"><strong  className="font-light">Title:</strong>{m.title}</h1>
              <p className="text-xl font-bold text-slate-50 lg:text-sm"><strong className="font-light">Description:</strong>{m.description}</p>
              </div>
             ))}
          </div>
         ) : (
          <div  className="flex flex-col items-center justify-center w-screen h-screen text-center">
            <p className={`${light?'text-red-950':'text-slate-50'} text-2xl italic font-bold `}>No Tasks Yet Completed ... </p><br/>
            <Link to="/" className="text-xl text-blue-600">Click to Add Task</Link>
          
          </div>
         )}
      </div>
      </div>
    </>
  )
}

export default Completed_Tasks
