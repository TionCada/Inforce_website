import React from 'react';
import './MainPage.module.css';
import s from './MainPage.module.css'
import Inforce from "./Inforce/Inforce";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import Services from "./Services/Services";
import Process from "./Process/Process";
import AppsCases from "./AppsCases/AppsCases";
import WeAreInforce from "./WeAreInforce/WeAreInforce";
import Reviews from "./Reviews/Reviews";

function MainPage() {
    return (
        <div className={s.container}>
            <Inforce/>
            <WhoWeAre/>
            <Services/>
            <Process/>
            <AppsCases/>
            <WeAreInforce/>
            <Reviews/>
        </div>
    )
}

export default MainPage;