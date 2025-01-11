import { NavLink } from "react-router-dom"

function Badgatway() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen text-center bg-slate-800">
        <img className="w-3/4 md:w-1/4 h-2/4" src="unauthorized.png" alt="Unauthorized" /><br/>
        <h2 className="text-xl text-slate-50">❌User Not Found❌</h2><br/>
        <NavLink className="text-xl font-thin text-blue-300" to="/Validate">Login Again !</NavLink>

      </div>
    </>
  )
}

export default Badgatway
