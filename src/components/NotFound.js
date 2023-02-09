import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='Container my-5 mx-5'>
      <h2>Page not found!!</h2>
      <Link to="/" className='btn btn-primary'>Home</Link>
    </div>
  )
}
