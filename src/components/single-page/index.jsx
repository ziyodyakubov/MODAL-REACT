import React from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SingleCar = () => {
  const {id} = useParams()

  return (
    <div className='container my-3'>
      <h3>Single User: {id}</h3>
    </div>
  )
}

export default SingleCar
