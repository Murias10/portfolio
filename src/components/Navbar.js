import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const handleLinkClick = (e) => {
    const links = document.querySelectorAll('.navbar-link');
    links.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
}


function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link className="navbar-link active" to="" onClick={handleLinkClick}>About</Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to="/projects" onClick={handleLinkClick}>Projects</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;