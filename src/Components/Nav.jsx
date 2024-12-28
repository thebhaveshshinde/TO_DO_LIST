import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { MyContext } from "./MyContext"
import { MyContext3 } from "./MyContext3"
import { MyContext2 } from "./MyContext2"
import { MyContext4 } from "./MyContext4"
import { MyContext5 } from "./MyContext5"


function Nav() {
    // const [isopen, setisopen] = useState(false)
    const { isopen, setisopen } = useContext(MyContext)
    const { Delete } = useContext(MyContext3)
    const { Tasks } = useContext(MyContext2)
    const { Completed } = useContext(MyContext4)
    const { light } = useContext(MyContext5)
    return (
        <>

            <nav className={`  ${light ? 'sm:bg-cyan-400' : 'sm:bg-slate-600'} hidden w-screen sm:flex sm:justify-center sm:items-center sm:text-center sm:mt-0  sm:h-20 sm:fixed sm:top-0 sm:p-2 sm:z-50`}>
                <NavLink className={`  ${light ? 'text-purple-900' : 'text-slate-50'} hidden p-3 text-xl italic  sm:flex  `} to="/">Create Task</NavLink>
                <NavLink className={`${light ? 'text-purple-900' : 'text-slate-50'} hidden p-3 text-xl italic  sm:flex   `} to="/All">All Task<strong className={`${Tasks.length <= 0 ? 'hidden' : 'flex'} text-xl text-red-950 non-italic`}>({Tasks.length})</strong></NavLink>
                <NavLink className={` ${light ? 'text-purple-900' : 'text-slate-50'} hidden p-3 text-xl italic  sm:flex   `} to="/Complete">Completed Task<strong className={`${Completed.length <= 0 ? 'hidden' : 'flex'} text-xl text-red-950 non-italic`}>({Completed.length})</strong></NavLink>
                <NavLink className={` ${light ? 'text-purple-900' : 'text-slate-50'} hidden p-3 text-xl italic  sm:flex   `} to="/Delete">Deleted Task<strong className={`${Delete.length <= 0 ? 'hidden' : 'flex'} text-xl text-red-950 non-italic`}>({Delete.length})</strong></NavLink>

            </nav>




            <div >

                <img className="fixed inline h-12 w-15 top-1 right-2 sm:hidden" src="../Hamberger.png" onClick={() => setisopen(!isopen)}></img>

            </div>


            {isopen && (
                <nav className={`${light ? 'bg-cyan-500' : 'bg-red-950 '} fixed flex flex-col items-center w-screen h-screen text-center justify-evenly sm:hidden z-80`}>

                    <NavLink className={` ${light ? 'text-purple-600' : 'text-slate-50'} text-2xl   active:text-3xl`} to={"/"} onClick={() => setisopen(false)}>Create Task</NavLink>
                    <NavLink className={` ${light ? 'text-purple-600' : 'text-slate-50'} text-2xl   active:text-3xl`} to={"/All"} onClick={() => setisopen(false)}>All Tasks<strong className={`${light ? 'text-red-500' : 'text-blue-500'} text-xl  non-italic ${Tasks.length <= 0 ? 'hidden' : 'flex'}`}>({Tasks.length})</strong></NavLink>
                    <NavLink className={` ${light ? 'text-purple-600' : 'text-slate-50'} text-2xl   active:text-3xl`} to={"/Complete"} onClick={() => setisopen(false)}>Completed Tasks<strong className={`${light ? 'text-red-500' : 'text-blue-500'} text-xl  non-italic ${Completed.length <= 0 ? 'hidden' : 'flex'}`}>({Completed.length})</strong></NavLink>
                    <NavLink className={` ${light ? 'text-purple-600' : 'text-slate-50'} text-2xl   active:text-3xl`} to={"/Delete"} onClick={() => setisopen(false)}>Deleted Tasks<strong className={`${light ? 'text-red-500' : 'text-blue-500'} text-xl  non-italic ${Delete.length <= 0 ? 'hidden' : 'flex'}`}>({Delete.length})</strong></NavLink>

                </nav>
            )}

            {isopen && (
                <div className="fixed top-2 right-2 sm:hidden">
                    <img className="w-12 h-13" src="../Cross.png " onClick={() => setisopen(false)} />
                </div>
            )}

        </>
    )
}

export default Nav
