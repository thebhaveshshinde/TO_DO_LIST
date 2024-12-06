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


function App() {

  const [isopen , setisopen] = useState(false)
  const [Tasks , setTasks] = useState([])
  const [Delete , setDelete] = useState([])
  const [Completed , setCompleted] = useState([])

  return (
    <>
      <Router>
      <MyContext.Provider value={{isopen , setisopen}}>
      <MyContext2.Provider value={{Tasks , setTasks}}>
      <MyContext3.Provider value={{Delete , setDelete}}>
      <MyContext4.Provider value={{Completed , setCompleted}}>
      
        <Nav />
        <div>
       
          <Routes>
         
            <Route path="/" element={<Create_task />} />
            <Route path="/All" element={<All />} />
            <Route path="/Delete" element={<Deleted_task />} />
            <Route path="/Complete" element={<Completed_Tasks />} />
           
          </Routes>
          
        </div>
        </MyContext4.Provider>
        </MyContext3.Provider>
        </MyContext2.Provider>
        </MyContext.Provider>

      </Router>
    </>
  )
}

export default App
