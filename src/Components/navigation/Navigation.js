import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
        if( isSignedIn ) {
            return (
            <nav style={{width: '200px', height: '140px'}}>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer shadow-hover'>Sign Out</p>
            </nav>
            );
        } else {
            return (
            <nav style={{height:'60px'}} className='signinregister'>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer shadow-hover'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer shadow-hover'>Register</p>
            </nav>
            );   
        }
}
export default Navigation;