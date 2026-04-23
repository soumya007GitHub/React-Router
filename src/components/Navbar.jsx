import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MoonStar, Sun } from 'lucide-react';
import { MyContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <nav className="bg-cyan-800 py-3 px-10 text-white flex justify-between items-center">
        <h2 className='text-xl font-bold'>Router</h2>
        <div className="flex gap-6">
            <Link to="/home">Home</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/about">About</Link>
            <Link to="/Products">Products</Link>
        </div>
        <button onClick={
          ()=>{
            setTheme(
              (prev)=>prev== "light" ? "dark" : "light"
            );
          }
        }>
        {
          theme == "light" ? <Sun/> : <MoonStar/>
        }
        </button>
    </nav>
  )
}

export default Navbar