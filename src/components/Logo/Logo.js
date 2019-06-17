import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';


const Logo = () => {
    return (
        <div className='ma4 auto'>
            <Tilt className="Tilt br2 shadow-2 center" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner pa3">
                     <img style={{paddingTop: '5px'}} src={brain} /> 
                </div>
            </Tilt>
        </ div>
    )
}

export default Logo;