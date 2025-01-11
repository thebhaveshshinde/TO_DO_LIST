import Nav from "./Components/Nav.jsx"
import Completed_Tasks from "./Components/Completed_Tasks.jsx"
import Create_task from "./Components/Create_task.jsx"
import All from "./Components/All.jsx"
import Deleted_task from "./Components/Deleted_task.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MyContext } from "./Components/MyContext.jsx"
import { useState } from "react"
import { MyContext2 } from "./Components/MyContext2.jsx"
import { MyContext3 } from "./Components/MyContext3.jsx"
import { MyContext4 } from "./Components/MyContext4.jsx"
import { MyContext5 } from "./Components/MyContext5.jsx"
import Log from "./Components/Log.jsx"
import Already from "./Components/Already.jsx"



function App() {

  const [isopen , setisopen] = useState(false)
  const [Tasks , setTasks] = useState(()=>{
    const Stored = localStorage.getItem('stored')
    return Stored ? JSON.parse(Stored) : ""
  })
  const [Delete , setDelete] = useState(()=>{
    const Deletes = localStorage.getItem('deleted')
    return Deletes ? JSON.parse(Deletes) : ""
  })
  const [Completed , setCompleted] = useState(()=>{
    const Completes = localStorage.getItem('completes')
    return Completes ? JSON.parse(Completes) : []
  })

  const [light , setlight] =  useState(()=>{
    const mode = localStorage.getItem('Mode')
    return mode ? JSON.parse(mode) : false
  })


  return (
    <>
    

      <Router>
      
      <MyContext.Provider value={{isopen , setisopen}}>
      <MyContext2.Provider value={{Tasks , setTasks}}>
      <MyContext3.Provider value={{Delete , setDelete}}>
      <MyContext4.Provider value={{Completed , setCompleted}}>
      <MyContext5.Provider value={{light,setlight}}>
     
        
        {/* <Nav /> */}
        <div>
       
          <Routes>
         
           <Route path="/" element={< Log />} />
            <Route path="/Create" element={<><Nav/><Create_task /></>} />
            <Route path="/All" element={<><Nav></Nav><All /></>} />
            <Route path="/Delete" element={<><Nav/><Deleted_task /></>} />
            <Route path="/Complete" element={<><Nav></Nav><Completed_Tasks /></>} />
            <Route path="/Validate" element={<Already />} />
           
          </Routes>
          
        </div>
        </MyContext5.Provider>
        </MyContext4.Provider>
        </MyContext3.Provider>
        </MyContext2.Provider>
        </MyContext.Provider>

      </Router>
    </>
  )
}

export default App
