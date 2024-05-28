import React from "react";
import "./style.css";
import {useNavigate} from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
    event.preventDefault();
    let name = event.target[0].value.toLowerCase();
    let password = Number(event.target[1].value);

    console.log(name)
    console.log(password)

    if (name == "admin" && password == 12345  ) {
      navigate("/users");
    } else {
      console.log(false);
    }
  };
  return (
    <div className="conatiner">
      <div className="card w-50 my-4 mx-5">
        <div className="card-header">
          <h2>Admin panel</h2>
        </div>
        <div className="card-body">
          <form
            onSubmit={handleSubmit}
            className="form form-wrapper d-flex flex-column gap-2"
            id="submit"
          >
            <input
              className="form-contol border-none my-2"
              type="text"
              placeholder="Admin"
            />
            <input
              className="form-contol my-2"
              type="password"
              placeholder="12345"
            />
          </form>
        </div>

        <div className="card-footer">
          <button className="btn btn-primary" form="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
