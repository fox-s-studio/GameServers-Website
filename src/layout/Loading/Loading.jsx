import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    height: 400px;
    width: 400px;
	transform-origin: 50% 65%;
    /*animation: rotate 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite forwards;*/
`;

const StyledPolygon = styled.polygon`
    @keyframes dash {
        to {
            stroke-dashoffset: 136;
        }
    }
    fill: transparent;
    stroke: hsl(180, 67%, 54%);
    stroke-width: 1px;
    stroke-dasharray: 17;
	animation: dash 3s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;

function Loading() {
    return(
        <div className="Loading">
            <svg id="rectangle" viewBox="-3 -4 39 39">
                <polygon points="16,0 32,32 0,32">
                </polygon>
            </svg>
            <p>Loading</p>
        </div>
    );
};

export default Loading;