import React from "react";
import Lottie from 'react-lottie';


const DisplayLottie = ({animationPath, width, height}) => {

    const defaultOption = {
        loop: true,
        autoplay: true,
        path: animationPath,
        width: width,
        height: height,
    };

    const buttonStyle = {
        display: 'block',
        width: width,
        height: height, 
        transform: 'translate3d(0px, 0px, 0px)',
      };

    return (
        <div onClick={() => null}>
            <Lottie style={buttonStyle} options={defaultOption} />
        </div>
    );
}


export default DisplayLottie;