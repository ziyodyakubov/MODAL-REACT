import React from 'react'
import {Link} from "react-router-dom"
import UserModal from "../modal"
import { useState } from 'react'
import 'boxicons'
import 'bootstrap/dist/css/bootstrap.min.css';

function Table() {
  const [users, setUser] = useState([])
  const [search,SearchUser] = useState("")
  const [Modal,setModal] = useState(false)


  const deleteUser = (id) =>{
    let new_users = users.filter(item=> item.id !== id)
    setUser([...new_users])
  }

  // const editable = (id) =>{
  //   if(result.id === id){
  //     console.log(true)
  //   }else{
  //     console.log(false)
  //   }
  // }

     

  return (
    <>
    <UserModal open={Modal} toggle={()=>setModal(false)} users={users} setUser={setUser}/>
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
                          <box-icon name='edit-alt' onClick={()=>editable(item.id)} ></box-icon> 
                          <box-icon className='text-center' onClick={()=>deleteUser(item.id)} type='solid' name='trash'></box-icon> 
                          </td>
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
            </div>

            <div className="col-md-3">
                  <button className='btn btn-success' onClick={()=>setModal(true)}>Add user</button>
            </div>      
        </div>
      </div>
    </>
  )
}

export default Table