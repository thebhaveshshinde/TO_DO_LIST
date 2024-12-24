import { useContext } from "react"
import {MyContext} from "./MyContext"
import { MyContext3 } from "./MyContext3"
import { Link } from "react-router-dom"



function Deleted_task() {
  const { isopen } = useContext(MyContext)
  const { Delete , setDelete } = useContext(MyContext3)

  const HandleDeleteClick = ()=>{
    localStorage.removeItem('deleted')
    setDelete([])
    
  }
  

  return (
    <>
      <div className="min-h-screen bg-slate-800">
      <div className="top-0 left-0 right-0 z-10 w-screen h-20 bg-slate-800 ">
        <img src="../Trash.png" onClick={HandleDeleteClick} className={`${isopen?'hidden' : 'flex'} fixed text-4xl text-purple-400 bolder bottom-3 right-3 `} />
      </div>
      <div className="flex flex-col w-screen min-h-screen text-center bg-slate-800 md:grid md:grid-cols- lg:grid-cols-4 ">
        {Delete.length > 0 ? (
          <div className="w-screen min-h-screen bg-slate-800 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Delete.map((d, index) => (
              <div className="flex flex-col items-center justify-center p-3 m-4 text-center border-2 border-purple-800 rounded w-4/4 sm:w-3/4 md:w-50vw lg:w-40vw bg-slate-700 h-3/4" key={index}>
                <h1 className="text-xl font-bold text-slate-50 lg:text-lg"><strong className="font-light">Title:</strong>{d.title}</h1>
                <p className="text-xl font-bold text-slate-50 lg:text-sm"><strong className="font-light">Description:</strong>{d.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-screen h-screen text-center">
            <p className="text-2xl italic font-bold text-slate-50">No Deleted Task ...</p><br/>
            <Link to="/" className="text-xl text-blue-600">Click to Add Task </Link>
          </div>
        )}




      </div>
      </div>
    </>
  )
}

export default Deleted_task



