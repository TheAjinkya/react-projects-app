import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import { ToDoApp } from './components/ToDoApp'

function App() {
  return (
     <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="todo" element={<ToDoApp />} />
    </Routes>
  )
}

export default App
