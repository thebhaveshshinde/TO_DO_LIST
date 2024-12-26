import { useContext } from "react"
import {MyContext} from "./MyContext"
import { MyContext3 } from "./MyContext3"
import { Link } from "react-router-dom"
import { MyContext5 } from "./MyContext5"



function Deleted_task() {
  const { isopen } = useContext(MyContext)
  const { Delete , setDelete } = useContext(MyContext3)
  const {light} = useContext(MyContext5)

  const HandleDeleteClick = ()=>{
    localStorage.removeItem('deleted')
    setDelete([])
    
  }
  

  return (
    <>
      <div className="min-h-screen bg-slate-800">
      <div className={`${light?'bg-cyan-200':'bg-slate-800'} top-0 left-0 right-0 z-10 w-screen h-20 `}>
        <img src="../Trash.png" onClick={HandleDeleteClick} className={`${isopen?'hidden' : 'flex'} fixed text-4xl text-purple-400 bolder bottom-3 right-3 `} />
      </div>
      <div className={`${light?'bg-cyan-200':'bg-slate-800 '} flex flex-col w-screen min-h-screen text-center md:grid md:grid-cols- lg:grid-cols-4 `}>
        {Delete.length > 0 ? (
          <div className={`${light?'bg-cyan-200':'bg-slate-800'} w-screen min-h-screen  md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
            {Delete.map((d, index) => (
              <div className={`${light?'bg-slate-400':'bg-slate-700'} flex flex-col items-center justify-center p-3 m-4 text-center border-2 border-purple-800 rounded w-4/4 sm:w-3/4 md:w-50vw lg:w-40vw  h-3/4`} key={index}>
                <h1 className="text-xl font-bold text-slate-50 lg:text-lg"><strong className="font-light">Title:</strong>{d.title}</h1>
                <p className="text-xl font-bold text-slate-50 lg:text-sm"><strong className="font-light">Description:</strong>{d.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-screen h-screen text-center">
            <p className={`${light?'text-red-950':'text-slate-50'} text-2xl italic font-bold `}>No Deleted Task ...</p><br/>
            <Link to="/" className="text-xl text-blue-600">Click to Add Task </Link>
          </div>
        )}




      </div>
      </div>
    </>
  )
}

export default Deleted_task



