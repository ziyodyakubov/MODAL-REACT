import React, { useState } from "react";
import { nanoid } from 'nanoid'
import { Modal, ModalBody, ModalFooter,ModalHeader} from "reactstrap";

const UserModal = (props) => {

    const [form,setForm] = useState({})

    const handleChange = (event)=>{
        event.preventDefault()
        const {name,value} = event.target
        setForm({...form,[name]:value})
    } 
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        let id = nanoid()
        let nimadir = {...form,id}
        props.users.push(nimadir)
        props.setUser([...props.users])
        props.toggle(false)
    }
    
    return (
        <Modal isOpen={props.open} toggle={props.toggle}>

                <ModalHeader>
                    <h3>Add user</h3>
                </ModalHeader>

                <ModalBody>
                    <form onSubmit={handleSubmit} id="todo">
                        <input
                            type="text"
                            required
                            name="name"
                            onChange={handleChange}
                            placeholder="Enter name"
                            className="form-control my-2"
                        />
                        <input
                            type="number"
                            required
                            name="age"
                            onChange={handleChange} 
                            placeholder="Enter age"
                            className="form-control my-2"
                        />
                        <input
                            type="tel"
                            required
                            name="phone"
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            className="form-control my-2"
                        />
                        <input
                            type="text"
                            required
                            name="address"
                            onChange={handleChange}
                            placeholder="Enter address"
                            className="form-control my-2"
                        />
                    </form>

                </ModalBody>

                <ModalFooter>
                    <button
                        id="form"
                        type="submit"
                        className="btn btn-primary"
                        form="todo"
                    >
                        Add User
                    </button>

                </ModalFooter>
        </Modal>
    );
};

export default UserModal;
