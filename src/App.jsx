import { useState } from 'react';
import Admin from "./components/admin";
import Users from "./components/users"
import Single from "./components/single-page"
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Admin/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/users/:id" element={<Single/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
