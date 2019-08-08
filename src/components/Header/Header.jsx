import React from 'react';
import video from '../../assets/videos/headerVidéo.webm';

function Header(){
    return(
        <div className="Header">
            <div className="fullVideo">
                <video loop muted autoPlay playsInline>
                    <source src={video} type="video/webm" />
                </video>
            </div>
            <div className="HeaderContent">
                <h1 className="title">
                    FoxStudio - Gaming Servers
                </h1>
                <h3 className="subtitle">
                    Hub de serveurs gaming développé par Foxstudio.
                </h3>
            </div>
        </div>
    )
};

export default Header;