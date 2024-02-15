import React, { useState } from 'react';
import './Navbar.css';
import Home from './assets/home.svg';
import Info from './assets/info.svg';
import Globe from './assets/globe.svg';
import Bars from './assets/bars.svg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <img
                src={Bars}
                className={`menu pointer ${isOpen ? 'bars-open' : ''}`}
                onClick={toggleNavbar}
            />
            <div className={`sidebar sidebar-show absolute shadow ${isOpen ? 'open' : ''}`}>
                <ul className="sidebar-nav">
                    <li className="nav-title" style={{
                        color: 'black',
                        textTransform: 'lowercase',
                        fontSize: '16px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        maxWidth: '150px',
                        fontWeight: '600'
                    }}>Track-Trace</li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: 'black' }}><img src={Home} alt="Home icon" />Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: 'black' }}><img src={Info} alt="Info icon" />About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.track-trace.com/" style={{ color: 'black' }}><img src={Globe} alt="Globe icon" />Full Site</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
