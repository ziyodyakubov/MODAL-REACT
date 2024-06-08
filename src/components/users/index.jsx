import React from 'react'
import {Link} from "react-router-dom"
import UserModal from "../modal"
import { useState } from 'react'
import 'boxicons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';


function Table() {
  const [users, setUsers] = useState([])
  const [search,SearchUser] = useState("")
  const [Modal,setModal] = useState(false)
  const [user,setUser] = useState({})


  const deleteUser = (id) =>{
    console.log(id)
    let new_users = users.filter(item=> item.id !== id)
    setUsers([...new_users])
  }

  const editable = (item) =>{
    setUser(item)
    setModal(true)
  }

  const toggle = () =>{
    setUser({})
    setModal(false)
  }

     

  return (
    <>
    <UserModal open={Modal} toggle={toggle} user={user} users={users} setUser={setUsers}/>
      <div className="container">
        <div className="row mt-5">
            <div className="col-md-9">
              <input onChange={(e)=>SearchUser(e.target.value)} type="text" className='mb-4 w-100 p-2 rounded-2 border border-secondary-subtle' placeholder='Search your name' />
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                    <th>T/R</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone number</th>
                    <th>Address</th>
                    <th className='text-center'>Just</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      users?.filter((item)=>{
                        if(item?.name?.toLowerCase().includes(search.toLowerCase())){
                          return item
                        }
                     }).map((item,index)=>(
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td className='d-flex items-center justify-content-center text-center gap-3'>
                          <Link to={`/users/${item.id}`}>
                          <box-icon name='show' type='solid' ></box-icon>
                          </Link> 
                          <box-icon name='edit-alt' onClick={()=>editable(item)} ></box-icon> 
                          <box-icon className='text-center' onClick={()=>deleteUser(item.id)} type='solid' name='trash'></box-icon> 
                          </td>
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
            </div>

            <div className="col-md-3">
                  <Button variant="contained" onClick={()=>setModal(true)}>Add user</Button>
            </div>      
        </div>
      </div>
    </>
  )
}

export default Table