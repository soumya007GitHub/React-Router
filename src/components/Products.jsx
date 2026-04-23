import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (<div className="flex items-center justify-center flex-col">
        <div className='underline font-bold text-xl'>Products Page</div>
        <div className="flex items-center justify-center gap-6">
            <Link to="mens">Men</Link>
            <Link to="women">Women</Link>
        </div>
        <Outlet />
    </div>
    )
}

export default Products