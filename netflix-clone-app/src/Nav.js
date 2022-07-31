import React,{useEffect, useState} from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false);
        });
        
    }, []);

    return (
    <div className={`nav ${show && "nav__black"}`}>
        
        <img
            className="nav__logo"
            src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png'
            alt="Netflix Logo"/>

        <img
            className="nav__avatar"
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt="Netflix Logo"/>
        </div>
    );
}

export default Nav;