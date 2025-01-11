import { useContext, useEffect, useState } from "react"
import { MyContext2 } from "./MyContext2"
import { Link } from "react-router-dom"
import { MyContext3 } from "./MyContext3"
import { MyContext4 } from "./MyContext4"
import { MyContext } from "./MyContext"
import { MyContext5 } from "./MyContext5"


function All() {
    const [inputdata , setinputdata ] = useState("")
    const { Completed, setCompleted } = useContext(MyContext4)
    const { Delete, setDelete } = useContext(MyContext3)
    const { Tasks, setTasks } = useContext(MyContext2)
    const { isopen } = useContext(MyContext)
    const [date , setdate] = useState(new Date().toLocaleDateString())
    const {light} = useContext(MyContext5)
    
    useEffect(()=>{
        localStorage.setItem('stored',JSON.stringify(Tasks))
    })


    useEffect(()=>{
        localStorage.setItem('deleted',JSON.stringify(Delete))
    })

    useEffect(()=>{
        localStorage.setItem('completes',JSON.stringify(Completed))
    })

    const filtereddata = inputdata ? Tasks.filter((T) => T.title.toLowerCase().includes(inputdata.toLowerCase())) : Tasks

    const HandleDelete = (index) => {
        const tasktodelete = Tasks[index]
        if (tasktodelete) {
            setDelete([...Delete, tasktodelete])
            setTasks(Tasks.filter((_, t) => t !== index))
        }


    }

    const HandleComplete = (index) => {
        const tasktocomplete = Tasks[index]
        if (tasktocomplete) {
            setCompleted([...Completed, tasktocomplete])
            setTasks(Tasks.filter((_, t) => t !== index))
        }

    }

    


    return (
        <>
            <div className={`${isopen ? 'hidden' : 'flex'} fixed h-4/4 w-4/4 z-10 inline-block ml-3   top-2  sm:hidden `}>
                <input type="text" value={inputdata} onChange={(e)=>setinputdata(e.target.value)}  placeholder="Search Task " className="h-8 mr-4 text-xl font-bold border-2 border-blue-700 rounded " />
            </div>

            <div className={`${light?'bg-cyan-200':'bg-slate-800'} md:mt-55`}>

                <div className={`${light?'bg-cyan-200':'bg-slate-800'} top-0 left-0 right-0 z-10 w-screen h-20  `}></div>

                <div >


                    {filtereddata.length > 0 ? (
                        <div className={`${light?'bg-cyan-200':'bg-slate-800'} w-screen min-h-screen  md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
                            {Tasks.map((T, index) => (
                                <div className={`${light?'bg-slate-400':'bg-slate-700'} flex flex-col items-center justify-center p-3 m-4 text-center border-2 border-purple-800 rounded w-4/4 sm:w-3/4 md:w-50vw lg:w-40vw  h-3/4 `} key={index}>
                                    <h1 className="text-xl font-bold text-slate-50 lg:text-lg"><strong className="font-light">Title:</strong>{T.title}</h1>
                                    <p className="text-xl font-bold text-slate-50 lg:text-sm"><strong className="font-light">Description:</strong>{T.description}</p>
                                    <span className="flex">
                                        <img className="w-8 h-8 m-2 rounded " src="../Dustbin.png" alt="Dustbin logo Image" onClick={() => HandleDelete(index)} ></img>
                                        <img className="w-8 h-8 m-2 rounded " src="../Completed.png" alt="Dustbin logo Image" onClick={() => HandleComplete(index)} ></img>
                                    </span>
                                   <span className="text-slate-50">{date}</span>

                                </div>
                            ))}
                        </div>

                    ) : (
                        <div className="flex flex-col items-center justify-center w-screen h-screen text-center ">
                            <p className={`${light?'text-red-950':'text-slate-50'} text-2xl italic font-bold`} >No Task Added Yet ... </p><br />
                            <Link to="/Create" className="text-xl text-blue-600 ">Click to Add Task</Link>
                        </div>
                    )}

                </div>


            </div>


        </>
    )
}

export default All
