import React from 'react';
import './Inforce.module.css';
import s from './Inforce.module.css'
import Button from "../../../common/Button/Button";
import ReviewBlock from "../../../common/ReviewBlock/ReviewBlock";
import phone from '../../../assets/images/phone.svg'
import tablet from '../../../assets/images/tablet.svg'

function Inforce() {
    return (
        <div className={s.container}>
            <div className={s.firstColumn}>
                <p className={s.textBlock1}>Inforce</p>
                <h1 className={s.textBlock2}>Full-Cycle Web & Mobile App Development</h1>
                <div>
                    <div className={s.innerTextBlock}>
                        <p className={s.textBlock3}>Talented IT experts to make your ideas go live
                            Pursuing the highest quality for your business in a timely & seamless manner<br/>
                            Delivering amazing and intuitive solutions on time</p>
                        <div className={s.buttonContainer}>
                            <Button text={'Free consultation'} width={199} textColor={'#DF263E'} backgroundColor={'#FFFFFF'}/>
                        </div>
                    </div>
                    <div className={s.reviewBlock}>
                        <ReviewBlock/>
                    </div>
                </div>
            </div>
            <div className={s.secondColumn}>
                <div className={s.imageContainer}>
                    <img className={s.phoneImage} src={phone} alt={""}/>
                    <img className={s.tabletImage} src={tablet} alt={""}/>
                </div>
            </div>
        </div>
    )
}

export default Inforce;