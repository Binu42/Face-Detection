import React from 'react';
import './Logo.css';
import logo from './india.png'
import Tilt from 'react-tilt';

const Logo = ({onRoutechange, signedInStatus}) => {
    return (
        <div className='ma2 mt0 navbar'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 50, width: 50 }} >
                <div className="Tilt-inner"><img alt='logo' src={logo}/></div>
            </Tilt>
            {
                signedInStatus ? <nav style={{display: 'flex', justifyContent: 'flex-end', padding: '10px', position: 'relative', marginLeft: 'auto'}}>
                 <a onClick={() => onRoutechange('signout')} className="f6 link dim br-pill ba ph3 pv2 mb2 dib black pointer navi" href="#0">Log Out</a>
                </nav>
                :<nav style={{display: 'flex', justifyContent: 'flex-end', padding: '10px', position: 'relative', marginLeft: 'auto'}}>
                    <a onClick={() => onRoutechange('signin')} className="f6 link dim br-pill ba ph3 pv2 mb2 dib black pointer navi" href="#0">Log In</a>
                    <a onClick={() => onRoutechange('register')} className="f6 link dim br-pill ba ph3 pv2 mb2 dib black pointer navi" href="#0">Register</a>
                </nav>
            }
        </div>
    );
}

export default Logo;