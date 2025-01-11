import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";


function Already() {
    const [loginfo, setloginfo] = useState({ Username: '', Password: '' })
    const Navigate = useNavigate()
    const HandleSubmit = (e) => {
        e.preventDefault();
        setloginfo({ Username: '', Password: '' })

        const StoredInfo = JSON.parse(localStorage.getItem('Account_Details'))
        const Find = StoredInfo.findIndex(f => (f.username === loginfo.Username) && (f.password === loginfo.Password )) 
 
        if(Find === -1){
            alert("Login Failed !")
        }else{
            Navigate("/Create")
        }
    }
    const HandleChange = (e) => {
        setloginfo({ ...loginfo, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center w-screen h-screen m-2 text-center  bg-slate-800">
                <h1 className="text-4xl font-bold text-slate-50 md:text-6xl">Login In !</h1><br />
                <form onSubmit={HandleSubmit} className="w-screen ">
                    <input className="m-2 font-bold text-red-500 bg-blue-200 border-2 border-purple-900 rounded-md w-60 h-1/4 " type="text" name="Username" value={loginfo.Username} placeholder="Username" onChange={HandleChange} required /><br />
                    <input className="m-2 font-bold text-red-500 bg-blue-200 border-2 border-purple-900 rounded-md w-60 h-1/4 " type="text" name="Password" value={loginfo.Password} placeholder="Password" onChange={HandleChange} required /><br /><br />
                    <button className="p-2 text-2xl font-bold bg-blue-500 border-2 border-purple-900 rounded-md border-slate-100 text-slate-50">Login In</button><br /><br/>
                    <p className="text-lg font-light text-slate-50"><NavLink to="/">Don't have Account? Create One ...</NavLink></p>
                </form>
            </div>
        </>
    )
}

export default Already
