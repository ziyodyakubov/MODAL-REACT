import { useState } from 'react';
import Admin from "./components/admin";
import Table from "./components/Table"
import Single from "./components/single-page"
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Admin/>}/>
      <Route path="/users" element={<Table/>}/>
      <Route path="/table" element={<Single/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
