import React from 'react';
import './Reviews.module.css';
import s from './Reviews.module.css'
import image from '../../../assets/images/image.svg'
import OptionsBlock from "../../../common/OptionsBlock/OptionsBlock";
import rocketLogo from '../../../assets/images/rocketLogo.svg'
import phoneLogo from '../../../assets/images/phoneLogo.svg'
import OptionsBlockInnerCentered
    from "../../../common/OptionsBlock/OptionsBlockInnerCentered/OptionsBlockInnerCentered";
import SliderCentered from "../../../common/SliderCentered/SliderCentered";

function Reviews() {
    return (
        <div className={s.container}>
            <OptionsBlockInnerCentered subheader={'Reviews'} header={'Customer trust us'}
                                       mainText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                                       'Sit vestibulum pellentesque condimentum nisl suspendisse porta.'}/>
            <SliderCentered/>
        </div>
    )
}

export default Reviews;
