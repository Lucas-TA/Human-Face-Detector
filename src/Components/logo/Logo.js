import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0' style={{width: '150px'}}>
            <Tilt>
                <div className='Tilt grow-large br2 shadow-2' style={{ height: '150px'}}>
                    <div className='Tilt-inner pa3'>
                        <img style={{padding: '5px'}} alt='logo' src={brain} />
                    </div>
                </div>
            </Tilt>
        </div>
    );
}
export default Logo;