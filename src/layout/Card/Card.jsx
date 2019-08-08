import React from 'react';
import styled from 'styled-components';


/**
 * 
 * @param {Picture, Name} props (Required)
 * @param {Desc} props (Optionnal)
 *  
 */

 const PictureStyled = styled.div`
    background: url('${props => props.Picture || null}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
 `;

function Card(props){
    return(
        <div className="Card">
            <PictureStyled className="Picture"/>
            <div className="Name title small">{props.Name}</div>
            { (props.Desc) ? <div className="Description">{props.desc}</div> : null }
        </div>
    )
};

export default Card;