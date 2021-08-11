import React from 'react';
import './WhoWeAre.module.css';
import s from './WhoWeAre.module.css'
import WhoWeAreSectionBlock from "../../../common/WhoWeAreSectionBlock/WhoWeAreSectionBlock";
import video from '../../../assets/images/video.svg'

function WhoWeAre() {
    return (
        <div className={s.container}>
            <div className={s.firstBlock}>
                <h2>Who we are?</h2>
                <div className={s.blockModule}>
                    <div className={s.firstSection}>
                        <WhoWeAreSectionBlock text={"A full cycle of mobile app development"}/>
                        <WhoWeAreSectionBlock text={"A full cycle of mobile app development"}/>
                        <WhoWeAreSectionBlock text={"A full cycle of mobile app development"}/>
                    </div>
                    <div className={s.secondSection}>
                        <WhoWeAreSectionBlock text={"A full cycle of mobile app development"}/>
                        <WhoWeAreSectionBlock text={"A full cycle of mobile app development"}/>
                        <WhoWeAreSectionBlock text={"A full cycle of mobile app development"}/>
                    </div>
                </div>
            </div>
            <div className={s.secondBlock}>
                <img src={video}/>
            </div>
        </div>
    )
}

export default WhoWeAre;
