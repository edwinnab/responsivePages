import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Button} from "./button";
import './navbar.css';

/*
link is used for routing, and it works in place of the <a> tag
 */
function Navbar() {
    /* define your logic for the component before returning the html

     */
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click); //switches when the menu is clicked; reverses the states

    const closeMobileMenu = () => setClick(false);

//toggles and resizes the screen
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else {
            setButton(true)
        }
    };

    useEffect( () => {
        showButton();
    }, []);
//resizes the screen to make it responsive
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i className="fab fa-typo3"/>
                    </Link>
                    <div className={"menu-icon"} onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>

        </>
    )
}

export default Navbar;