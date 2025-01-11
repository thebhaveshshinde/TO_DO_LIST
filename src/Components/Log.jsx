import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"


function Log() {
    const [log, setlog] = useState({ username: '', password: '', age: '' })
    const [logs, setlogs] = useState(()=>{
        const Get = localStorage.getItem('Account_Details')
        return Get ? JSON.parse(Get) : []
    })
    useEffect(()=>{
        localStorage.setItem('Account_Details',JSON.stringify(logs))
    })
    

    const HandleSubmit = (e) => {
        e.preventDefault();
        setlogs([...logs, log])
        setlog({ username: '', password: '', age: '' })
    }

    const HandleChange = (e) => {
        setlog({ ...log, [e.target.name]: e.target.value })
    }
  
    return (
        <>

            <div className="flex flex-col items-center justify-center w-screen h-screen text-center bg-slate-800">
                <img className="lg:hidden"  src="Account.png" /><br/>
                <h1 className="text-4xl font-bold text-slate-50 md:text-6xl">Create an account !</h1><br />
                <h2 className="text-lg font-thin text-slate-50">Already Have An Account ? <NavLink to="/Validate" className="font-bold text-blue-500">Log In ... </NavLink></h2><br />
                <form onSubmit={HandleSubmit}  >
                    <input className="m-2 font-bold bg-blue-200 border-2 border-purple-900 rounded-md w-60 h-1/4 " type="text" name="username" value={log.username} placeholder="Enter Username" onChange={HandleChange} required /><br />
                    <input className="m-2 font-bold bg-blue-200 border-2 border-purple-900 rounded-md w-60 h-1/4 " type="text" name="password" value={log.password} placeholder="Enter Password" onChange={HandleChange} required /><br />
                    <input className="m-2 font-bold bg-blue-200 border-2 border-purple-900 rounded-md w-60 h-1/4 md:w-120 " type="number" name="age" value={log.age} placeholder="Enter age" onChange={HandleChange} /><br /><br />
                    <button className="p-2 text-2xl font-bold bg-blue-500 border-2 border-purple-900 rounded-md border-slate-100 text-slate-50">Create Account</button>
                </form>
            </div>


        </>
    )
}

export default Log
