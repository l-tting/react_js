import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            {/* my nav component for every page */}
            <NavBar />

            <div className='mb-40'>
                <Outlet />
            </div>

            {/* my footer component for every page */}
            <div className=''>
                  <Footer />
            </div>
          

        </div>
    )
}

export default Layout
