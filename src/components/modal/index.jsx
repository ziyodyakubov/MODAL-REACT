import React, { useState } from "react";
import { nanoid } from 'nanoid'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const UserModal = (props) => {

    const [form, setForm] = useState({})

    const handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.toggle()
        if (props.user.id) {
            let new_arr = props.users.map((item)=>{
                if(item.id === props.user.id){
                    item.name = form.name ? form.name : item.name
                    item.age = form.age ? form.age : item.age
                    item.phone = form.phone ? form.phone : item.phone
                    item.address = form.address ? form.address : item.address
                }
                return item
            })
            props.setUsers([...new_arr])
            
        } else {
            props.toggle()
            let id = nanoid()
            let nimadir = { ...form, id }
            props.users.push(nimadir)
            props.setUsers([...users])
        }
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
                        defaultValue={props.user.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        className="form-control my-2"
                    />
                    <input
                        type="number"
                        required
                        name="age"
                        defaultValue={props.user.age}
                        onChange={handleChange}
                        placeholder="Enter age"
                        className="form-control my-2"
                    />
                    <input
                        type="tel"
                        required
                        name="phone"
                        defaultValue={props.user.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="form-control my-2"
                    />
                    <input
                        type="text"
                        required
                        name="address"
                        defaultValue={props.user.address}
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
