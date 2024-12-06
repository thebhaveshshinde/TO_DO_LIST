import { useContext, useState } from "react"
import { MyContext2 } from "./MyContext2"
import { Link } from "react-router-dom"
import { MyContext3 } from "./MyContext3"
import { MyContext4 } from "./MyContext4"


function All() {
    const {Completed , setCompleted} = useContext(MyContext4)
    const {Delete , setDelete} = useContext(MyContext3)
    const { Tasks, setTasks } = useContext(MyContext2)

    const HandleDelete = (index) => {
        const tasktodelete = Tasks[index]
        if(tasktodelete){
            setDelete([...Delete , tasktodelete])
            setTasks(Tasks.filter((_, t) => t !== index))
        }
        

    }

    const HandleComplete = (index) => {
        const tasktocomplete = Tasks[index]
        if(tasktocomplete){
            setCompleted([...Completed , tasktocomplete])
            setTasks(Tasks.filter((_, t) => t !== index))
        }
        
    }

    return (
        <>
            <div className="bg-slate-800">

                <div className="top-0 left-0 right-0 z-10 w-screen h-20 bg-slate-800 "></div>
                <div >


                    {Tasks.length > 0 ? (
                        <div className="w-screen min-h-screen bg-slate-800 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {Tasks.map((T, index) => (
                                <div className="flex flex-col items-center justify-center p-3 m-4 text-center border-2 border-purple-800 rounded w-4/4 sm:w-3/4 md:w-50vw lg:w-40vw bg-slate-700 h-3/4 " key={index}>
                                    <h1 className="text-xl font-bold text-slate-50 lg:text-lg"><strong className="font-light">Title:</strong>{T.title}</h1>
                                    <p className="text-xl font-bold text-slate-50 lg:text-sm"><strong className="font-light">Description:</strong>{T.description}</p>
                                    <span className="flex">
                                        <img className="w-8 h-8 m-2 rounded " src="../Dustbin2.png" alt="Dustbin logo Image" onClick={() => HandleDelete(index)} ></img>
                                        <img className="w-8 h-8 m-2 rounded " src="../Completed.png" alt="Dustbin logo Image" onClick={() => HandleComplete(index)} ></img>
                                    </span>

                                </div>
                            ))}
                        </div>

                    ) : (
                        <div className="flex flex-col items-center justify-center w-screen h-screen text-center">
                            <p className="text-2xl italic font-bold text-slate-50" >No Task Added Yet ... </p><br />
                            <Link to="/" className="text-xl text-blue-600">Click to Add Task</Link>
                        </div>
                    )}

                </div>


            </div>
            
        </>
    )
}

export default All
