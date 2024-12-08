import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { MyContext } from "./MyContext"
import { MyContext3 } from "./MyContext3"
import { MyContext2 } from "./MyContext2"
import { MyContext4 } from "./MyContext4"


function Nav() {
    // const [isopen, setisopen] = useState(false)
    const { isopen , setisopen } = useContext(MyContext)
    const {Delete} = useContext(MyContext3)
    const {Tasks} = useContext(MyContext2)
    const {Completed}= useContext(MyContext4)
    return (
        <>

            <nav className="hidden w-screen sm:flex sm:justify-center sm:items-center sm:text-center sm:mt-0 sm:bg-slate-600 sm:h-20 sm:fixed sm:top-0 sm:p-2 sm:z-50">
                <NavLink className="hidden p-3 text-xl italic text-slate-50 sm:flex active:text-slate-800" to="/">Create Task</NavLink>
                <NavLink className="hidden p-3 text-xl italic text-slate-50 sm:flex active:text-slate-800" to="/All">All Task<strong className="text-xl text-red-950 non-italic">({Tasks.length})</strong></NavLink>
                <NavLink className="hidden p-3 text-xl italic text-slate-50 sm:flex active:text-slate-800" to="/Complete">Completed Task<strong className="text-xl text-red-950 non-italic">({Completed.length})</strong></NavLink>
                <NavLink className="hidden p-3 text-xl italic text-slate-50 sm:flex active:text-slate-800" to="/Delete">Deleted Task<strong className="text-xl text-red-950 non-italic">({Delete.length})</strong></NavLink>
               
            </nav>
            <div >
                <img className="fixed w-8 h-7 top-2 right-2 sm:hidden" src="../download2.png" onClick={() => setisopen(!isopen)}></img>
            </div>

            {isopen && (
                <div className="fixed flex flex-col items-center w-screen h-screen text-center bg-red-950 justify-evenly sm:hidden z-80">

                    <NavLink className="text-2xl text-slate-50 active:text-purple-800 active:text-3xl" to={"/"} onClick={()=>setisopen(false)}>Create Task</NavLink>
                    <NavLink className="text-2xl text-slate-50 active:text-purple-800 active:text-3xl" to={"/All"} onClick={()=>setisopen(false)}>All Tasks<strong className="text-xl text-blue-500 non-italic ">({Tasks.length})</strong></NavLink>
                    <NavLink className="text-2xl text-slate-50 active:text-purple-800 active:text-3xl" to={"/Complete"} onClick={()=>setisopen(false)}>Completed Tasks<strong className="text-xl text-blue-500 non-italic ">({Completed.length})</strong></NavLink>
                    <NavLink className="text-2xl text-slate-50 active:text-purple-800 active:text-3xl" to={"/Delete"} onClick={()=>setisopen(false)}>Deleted Tasks<strong className="text-xl text-blue-500 non-italic ">({Delete.length})</strong></NavLink>
                    
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
