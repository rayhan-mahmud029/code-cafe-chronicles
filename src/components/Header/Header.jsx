import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className='navbar'>
            <h1>Code cafe chronicles</h1>
            <div className="nav-items">
                <a href="sign-up">Sign Up</a>
                <a href="login">Login</a>
                <img src="https://images.pexels.com/photos/15422042/pexels-photo-15422042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
        </div>
    );
};

export default Header;
