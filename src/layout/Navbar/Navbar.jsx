import React from 'react';
import Logo from '../../assets/img/WhiteFox.png';

function Navbar(props) {
    return(
        <div className={props.active ? "Navbar active" : "Navbar"}>
            <div className="Logo">
                <img src={Logo} alt="Foxstudio's Logo" />
            </div>
            <ul className="Menu">
                <li className="item" data-section="servers">
                    <a href="#">Nos Serveurs</a>
                </li>
                <li className="item" data-section="team">
                    <a href="#">l'Équipe</a>
                </li>
                <li className="item" data-section="discord">
                    <a href="#">Comunautés Discord</a>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;