import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-cyan-800 py-3 px-10 text-white flex justify-between items-center">
        <h2 className='text-xl font-bold'>Router</h2>
        <div className="flex gap-6">
            <Link to="/home">Home</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/about">About</Link>
            <Link to="/Products">Products</Link>
        </div>
    </nav>
  )
}

export default Navbar