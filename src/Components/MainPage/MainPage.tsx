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
import TakeTheNextStepBlock from "../../common/TakeTheNextStepBlock/TakeTheNextStepBlock";
import Blog from "../Blog/Blog";
import FeedbackField from "../../common/FeedbackField/FeedbackField";

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
            <TakeTheNextStepBlock/>
            <Blog/>
            <FeedbackField/>
        </div>
    )
}

export default MainPage;