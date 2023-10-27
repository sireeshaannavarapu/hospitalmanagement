import React from 'react'
import { Outlet,Link } from 'react-router-dom'
function AdminDashBoard() {
    return(
        <div>
            <h1>AdminDashBoard</h1>
            <Link to="addhospital"> <button className='btn btn-success'>+Add Hospitals</button></Link>
            <Link to="addBed"><button className='btn btn-info'>+ Add Bed</button></Link>
            <Outlet></Outlet>
        </div>
    )
}
export default AdminDashBoard