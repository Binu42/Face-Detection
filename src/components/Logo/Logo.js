import React from 'react';
import './Logo.css';
import logo from './india.png'
import Tilt from 'react-tilt';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 50, width: 50 }} >
                <div className="Tilt-inner"><img alt='logo' src={logo}/></div>
            </Tilt>
        </div>
    );
}

export default Logo;