import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <>
        <nav>
            <label className="logo">Blog Bliss</label>
            <ul>
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/signin">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav>
        
        </>
    );
};

export default Navbar;
