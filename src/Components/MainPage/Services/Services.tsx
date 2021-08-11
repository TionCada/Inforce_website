import React from 'react';
import './Services.module.css';
import s from './Services.module.css'
import image from '../../../assets/images/image.svg'
import OptionsBlock from "../../../common/OptionsBlock/OptionsBlock";
import rocketLogo from '../../../assets/images/rocketLogo.svg'
import phoneLogo from '../../../assets/images/phoneLogo.svg'

function Services() {
    return (
        <div className={s.container}>
            <div className={s.image}>
                <img className={s.image} src={image}/>
            </div>
            <div className={s.optionsBlock}>
                <OptionsBlock subheader={'Services'}
                              header={'Strategy, Design, & App Development'}
                              mainText={'Blog turns your business idea into a ' +
                              'launched product by guiding your journey & customizing ' +
                              'the development to meet your goals. Whether you require ' +
                              'a SaaS platform, social networking mobile application, an ' +
                              'internal dashboard, or a sleek digital experience to engage ' +
                              'with your audience — we’ve got you covered.'}
                              icon1={rocketLogo} icon2={phoneLogo}
                              subheader1={'Fast'} subheader2={'Reliable'}
                              minorText1={'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
                              'elit. Sit vestibulum pellentesque condimentum nisl suspendisse porta. '}
                              minorText2={'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
                              'elit. Sit vestibulum pellentesque condimentum nisl suspendisse porta. '}
                              buttonText={'What we do?'}/>
            </div>
        </div>
    )
}

export default Services;
