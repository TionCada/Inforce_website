import React from 'react';
import './MainPage.module.css';
import s from './MainPage.module.css'
import Inforce from "./Inforce/Inforce";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import Services from "./Services/Services";
import TheInforceProcess from "./TheInforceProcess/TheInforceProcess";
import AppsCases from "./AppsCases/AppsCases";
import WeAreInforce from "./WeAreInforce/WeAreInforce";
import Reviews from "./Reviews/Reviews";
import TakeTheNextStepBlock from "../../common/TakeTheNextStepBlock/TakeTheNextStepBlock";
import Blog from "../Blog/Blog";
import FeedbackField from "../../common/FeedbackField/FeedbackField";
import Footer from "../Footer/Footer";

function MainPage() {
    return (
        <div className={s.container}>
            <Inforce/>
            <WhoWeAre/>
            <Services/>
            <TheInforceProcess/>
            <AppsCases/>
            <WeAreInforce/>
            <Reviews/>
            <TakeTheNextStepBlock/>
            <Blog/>
            <FeedbackField/>
            <Footer/>
        </div>
    )
}

export default MainPage;