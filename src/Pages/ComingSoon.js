import React from "react";
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import DisplayLottie from '../Components/DisplayLottie';



function ComingSoon() {
    return(
        <>
            <Navbar/>
            <div className="coming-soon">
                <DisplayLottie animationPath='./Lottie/ComingSoon.json' width='50%' height='50%' />
            </div>
            <Footer/>
        </>
    );
}


export default ComingSoon;