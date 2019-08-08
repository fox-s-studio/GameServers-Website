import React from 'react';
import video from '../../assets/videos/headerVidéo.webm';

function Header(props){
    return(
        <div className="Header">
            <div className="fullVideo">
                <video loop muted autoPlay playsInline>
                    <source src={video} type="video/webm" />
                </video>
            </div>
            <div className="HeaderContent">
                <h2 className="title regular">
                    Bienvenue sur
                </h2>
                <h1 className="title big">
                    FoxStudio - Gaming Servers
                </h1>
                <h3 className="title small">
                    Hub de serveurs gaming développé par Foxstudio.
                </h3>
            </div>
        </div>
    )
};

export default Header;