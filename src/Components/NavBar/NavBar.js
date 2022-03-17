import React from 'react'
// import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css'
import { useState } from 'react';
function Navbar() {

    const [open, setOpen] = useState(false);

    return(
        <nav className="NavigationBar_Nav-navbar">
            <Link to="/" className="NavigationBar_Nav-navlogo" onClick={()=>setOpen(false)}>
                DEADHEADS
            </Link>
            <ul className={open ? 'NavigationBar_Nav-nav-links active' : 'NavigationBar_Nav-nav-links'}>
            <li className="NavigationBar_Nav-nav-item">
                    <Link to="/" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        Home
                    </Link>
                </li>
                <li className="NavigationBar_Nav-nav-item">
                    <Link to="/directorsignin" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                       Director
                    </Link>
                </li>
                <li className="NavigationBar_Nav-nav-item">
                    <Link to="/membersignin" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                       Sign In
                    </Link>
                </li>
                {/* <li className="NavigationBar_Nav-nav-item">
                    <Link to="/nitrox" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        Nitrox
                    </Link>
                </li> */}
                {/* <li className="NavigationBar_Nav-nav-item">
                    <Link to="/blogs" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        Blogs
                    </Link>
                </li> */}
                <li className="NavigationBar_Nav-nav-item">
                    <Link to="/sponsors" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        Register
                        {/* Quiz <sup className='Navigation-new'> New!</sup> */}
                        {/* <img src="http://www.nitp.ac.in/php/images/new.gif" border="0" alt="new" className='Navigation-new'/> */}
                    </Link>
                </li>
            </ul>
            <div onClick={() => setOpen(!open)} className="NavigationBar_Nav-nav-icon">
                {open ? <FiX /> : <FiMenu />}
            </div>
        </nav>
    )
}

export default Navbar;