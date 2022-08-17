import React, {useState} from 'react';
import '../Static/Css/NavBar.css';


// Define MobileMenu component
const MobileMenu = () => {
    return (
      <div className={'mobile-menu'}>
        <a href='/Startup'>Home</a>
        <a href='/Startup/contact'>Contact Us</a>
      </div>
    );
};


function NavBar() {

    const [isShown, setIsShown] = useState(false);
    const toggleMobileMenu = () => {
        setIsShown(!isShown);
    };

    return(
        <>
            <div className='topnav'>
                {/* Your Logo/Brand here */}
                <div className='logo'>
                    DEV<span>EER</span>
                </div>

                {/* Desktop Menu, which only appears on large screens */}
                <div className='menu'>
                    <a href='/Startup' >
                        Home
                    </a>
                    <a href='/Startup/contact'>Contact Us</a>
                </div>

                {/* This button only shows up on small screens. It is used to open the mobile menu */}
                <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                &#8801;
                </button>
            </div>

            {/* The mobile menu and the close button */}
            {isShown && <MobileMenu />}
            {isShown && (
                <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
                &times;
                </button>
            )}
        </>
    );
}


export default NavBar;