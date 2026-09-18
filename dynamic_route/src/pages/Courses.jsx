import React from 'react'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
        <h1>Courses Page</h1>
      <div className='flex gap-6'>
        <Link to='/courses/react'>React</Link>
        <Link to='/courses/javascript'>JavaScript</Link>
      </div>
    </div>
  )
}

export default Courses