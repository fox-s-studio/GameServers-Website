import React from 'react';

function Navbar(props) {
    return(
        <div className={props.active ? "Navbar active" : "Navbar"}>
            <div className="Logo">
                <img src="" alt="" />
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
};

export default Navbar;