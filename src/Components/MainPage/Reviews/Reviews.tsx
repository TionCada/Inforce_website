import React from 'react';
import './Reviews.module.css';
import s from './Reviews.module.css'
import OptionsBlockInnerCentered
    from "../../../common/OptionsBlock/OptionsBlockInnerCentered/OptionsBlockInnerCentered";
import SliderCentered from "../../../common/SliderCentered/SliderCentered";

function Reviews() {
    return (
        <div className={s.container}>
            <div className={s.optionsBlockContainer}>
                <OptionsBlockInnerCentered subheader={'Reviews'} header={'Customer trust us'}
                                           mainText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                                           'Sit vestibulum pellentesque condimentum nisl suspendisse porta.'}/>
            </div>
            <SliderCentered/>
        </div>
    )
}

export default Reviews;
