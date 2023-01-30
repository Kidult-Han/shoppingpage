import React from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

function Makeups() {
  return (
    <div className='leftnav'>
      <nav>
        <Link to='/makeups/sk2'> SK2</Link>
      </nav>
      <nav>
        <Link to='/makeups/haba'>HABA</Link>
      </nav>
      <nav>
        <Link to='/makeups/shiseido'>资生堂</Link>
      </nav>
      <nav>
        <Link to='/makeups/others'>其他</Link>
      </nav>
    </div>
  )
}

export default Makeups
