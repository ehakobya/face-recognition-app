import React from 'react';
import Tilt from 'react-parallax-tilt';
import faceID from './faceID.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='mb5 mt0 center'>
            <Tilt className="Tilt br2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3 ">
                    <img style={{ paddingTop: '5px' }} alt='logo' src={faceID} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;