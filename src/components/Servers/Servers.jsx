import React from 'react';
import Card from '../../layout/Card/Card';
import Rust from '../../assets/img/Rust.jpg';

function Servers (props) {
    return(
        <div className="Servers" id="servers">
            <div className="ServersContent">
                <h2 className="title regular">
                    Nos Serveurs
                </h2>
                <div className="ServersList">
                    <Card Picture='../../assets/img/Rust.jpg' Name="Rust" Desc="Serveur Rust"/>
                </div>
            </div>
        </div>
    )
};

export default Servers;