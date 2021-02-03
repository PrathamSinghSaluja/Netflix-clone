import React, { useEffect, useState } from 'react';
import './Nav.css';


function Nav(){
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        
    }, []);

    return(
        <div className={`nav ${show && "nav-black"}`}>
            <img
                className="nav-logo"
                src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
                alt = "Netflix Logo"/>

            <img
                className="nav-avtar"
                src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
                alt = "Netflix User"/>
        </div>
    );
}

export default Nav;