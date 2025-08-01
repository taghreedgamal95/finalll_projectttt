import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../NavBar/NavBar'
import tgImage from '../../assets/TG.jpg'
export default function Home() {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <footer className="footer bg-light text-center text-white py-4">
        <div className="container">
          <img src={tgImage} alt="TG Fashion Logo" className="img-fluid w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} />
          
        </div>
      </footer>
        </>
    )
}
