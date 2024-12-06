import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { MyContext } from "./MyContext"


function Nav() {
    // const [isopen, setisopen] = useState(false)
    const { isopen , setisopen } = useContext(MyContext)
    return (
        <>

            <nav className="hidden w-screen sm:flex sm:justify-center sm:items-center sm:text-center sm:mt-0 sm:bg-slate-600 sm:h-20 sm:fixed sm:top-0 sm:p-2 sm:z-50">
                <NavLink className="hidden p-3 text-xl italic text-slate-50 sm:flex active:text-slate-800" to="/">Create Task</NavLink>
                <NavLink className="hidden p-3 text-xl italic text-slate-50 sm:flex active:text-slate-800" to="/All">All Task</NavLink>
                <NavLink className="hidden p-3 text-xl italic text-slate-50 sm:flex active:text-slate-800" to="/Complete">Completed Task</NavLink>
                <NavLink className="hidden p-3 text-xl italic text-slate-50 sm:flex active:text-slate-800" to="/Delete">Deleted Task</NavLink>
               
            </nav>
            <div >
                <img className="fixed w-8 h-7 top-2 right-2 sm:hidden" src="../download2.png" onClick={() => setisopen(!isopen)}></img>
            </div>

            {isopen && (
                <div className="fixed flex flex-col items-center w-screen h-screen text-center bg-red-950 justify-evenly sm:hidden z-80">

                    <NavLink className="text-2xl text-slate-50 active:text-purple-800 active:text-3xl" to={"/"} onClick={()=>setisopen(false)}>Create Task</NavLink>
                    <NavLink className="text-2xl text-slate-50 active:text-purple-800 active:text-3xl" to={"/All"} onClick={()=>setisopen(false)}>All Tasks</NavLink>
                    <NavLink className="text-2xl text-slate-50 active:text-purple-800 active:text-3xl" to={"/Complete"} onClick={()=>setisopen(false)}>Completed Tasks</NavLink>
                    <NavLink className="text-2xl text-slate-50 active:text-purple-800 active:text-3xl" to={"/Delete"} onClick={()=>setisopen(false)}>Deleted Tasks</NavLink>
                    
                </div>
            )}

            {isopen && (
                <div className="fixed top-2 right-2 sm:hidden">
                    <img className="h-8 w-9" src="../download3.png " onClick={()=>setisopen(false)} />
                </div>
            )}

        </>
    )
}

export default Nav
